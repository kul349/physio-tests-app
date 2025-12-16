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

  // React Query v5 object syntax
  const {
    data: tests = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: fetchTests,
  });

  // Multi-field search: test_name, region, level
  const filtered = tests.filter((test) => {
    const query = search.toLowerCase();
    return (
      test.test_name.toLowerCase().includes(query) ||
      (test.region && test.region.toLowerCase().includes(query)) 
    );
  });

  return { filtered, search, setSearch, loading: isLoading, error };
}
