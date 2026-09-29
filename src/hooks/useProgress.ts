import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "aion2-roadmap-progress-v1";

export function useProgress(allIds: string[]) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, hydrated]);

  const toggle = useCallback((id: string) => {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const reset = useCallback(() => setDone({}), []);

  const completed = hydrated ? allIds.filter((id) => done[id]).length : 0;
  const total = allIds.length;
  const nextId = hydrated ? allIds.find((id) => !done[id]) : undefined;

  return { done, toggle, reset, completed, total, nextId, hydrated };
}
