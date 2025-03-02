import { QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { expect, Mock, test } from "vitest";

import { mockResponse, queryClient } from "../setupTests";

import useFilteredBooksQuery from "@/hooks/Queries/useFilteredBooksQuery";

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("useSuspenseQuery에서 반환된 데이터가 mockResponse와 같은지 확인", async () => {
    (fetch as Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
    } as Response);

    const { result } = renderHook(() => useFilteredBooksQuery("React", 1), {
        wrapper,
    });

    await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toEqual(mockResponse);
    });

    // fetch가 올바른 url로 호출되었는지 확인
    expect(fetch).toHaveBeenCalledWith(
        `${import.meta.env.VITE_API_URL}/books?query=React&page=1`
    );
});
