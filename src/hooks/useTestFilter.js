// src/hooks/useTests.js
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

async function fetchTests() {
  const res = await fetch("/physio-test.json");
  if (!res.ok) throw new Error("Failed to fetch tests");
  return res.json();
}

export function useTests() {
  const [search, setSearch] = useState("");

  const {
    data: tests = [], // default empty array avoids undefined
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: fetchTests,
  });

  const filtered = tests.filter((test) => {
    const query = search.toLowerCase();
    return (
      test.test_name.toLowerCase().includes(query) ||
      (test.region && test.region.toLowerCase().includes(query))
    );
  });

  return { tests, filtered, search, setSearch, loading: isLoading, error };
}
