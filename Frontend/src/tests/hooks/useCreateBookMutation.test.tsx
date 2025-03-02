import { QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { expect, Mock, test, vi } from "vitest";

import { mockBookRequestBody, queryClient } from "../setupTests";

import useCreateBookMutation from "@/hooks/Queries/useCreateBookMutation";


const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("useCreateBookMutation Hook이 정상적으로 동작하는지 확인", async () => {
    const navigateMock = vi.fn();
    (useNavigate as Mock).mockReturnValue(navigateMock);

    (fetch as Mock).mockResolvedValue({
        ok: true,
        json: async () => mockBookRequestBody,
    });

    const { result } = renderHook(() => useCreateBookMutation(), { wrapper });

    // mutateAsync(mockBookRequestBody): mutate(body) 실행
    await act(async () => {
        await result.current.mutateAsync(mockBookRequestBody);
    });

    // fetch 요청이 올바른 URL과 데이터로 전송되었는지 확인
    expect(fetch).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mockBookRequestBody)
    })

    await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
    });

    // 책 생성후 "/create" 에서 "/" 으로 이동했는지 확인
    expect(navigateMock).toHaveBeenCalledWith("/");

})