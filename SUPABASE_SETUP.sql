-- Run in this app's Supabase SQL Editor. Safe to run again. No secrets belong in the web app.
begin;
grant usage on schema public to authenticated;
create table if not exists public.user_learning_state (
 user_id uuid primary key references auth.users(id) on delete cascade,
 state jsonb not null default '{}'::jsonb check (jsonb_typeof(state) = 'object' and octet_length(state::text) <= 1000000),
 revision bigint not null default 1,
 updated_at timestamptz not null default now()
);
alter table public.user_learning_state enable row level security;
revoke all on public.user_learning_state from public, anon;
grant select, insert, update on public.user_learning_state to authenticated;
drop policy if exists "read own learning state" on public.user_learning_state;
create policy "read own learning state" on public.user_learning_state for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "insert own learning state" on public.user_learning_state;
create policy "insert own learning state" on public.user_learning_state for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "update own learning state" on public.user_learning_state;
create policy "update own learning state" on public.user_learning_state for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create or replace function public.sync_learning_state(expected_revision bigint, new_state jsonb)
returns table(revision bigint)
language plpgsql security invoker set search_path = '' as $$
declare current_revision bigint; owner_id uuid := auth.uid();
begin
 if owner_id is null then raise exception 'Authentication required' using errcode = '28000'; end if;
 if expected_revision = 0 then
  insert into public.user_learning_state(user_id,state,revision) values (owner_id,new_state,1) on conflict (user_id) do nothing;
  if found then return query select 1::bigint; return; end if;
 end if;
 select s.revision into current_revision from public.user_learning_state s where s.user_id=owner_id for update;
 if current_revision is null or current_revision <> expected_revision then
  raise exception 'State changed on another device' using errcode = '40001';
 end if;
 update public.user_learning_state s set state=new_state, revision=s.revision+1, updated_at=now() where s.user_id=owner_id returning s.revision into current_revision;
 return query select current_revision;
end;
$$;
revoke all on function public.sync_learning_state(bigint,jsonb) from public, anon;
grant execute on function public.sync_learning_state(bigint,jsonb) to authenticated;

commit;
notify pgrst, 'reload schema';
