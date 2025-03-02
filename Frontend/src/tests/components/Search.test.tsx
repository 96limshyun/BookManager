import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import { describe, it, vi, expect, Mock } from "vitest";

import Search from "@/components/books/Search";

describe("Search Component", () => {
    const navigateMock = vi.fn();
    (useNavigate as Mock).mockReturnValue(navigateMock);

    it("검색어 입력 시 URL 쿼리가 변경되고 변경된 쿼리로 이동 되는지 확인", async () => {
        render(
            <MemoryRouter initialEntries={["/test?page=1"]}>
                <Routes>
                    <Route path="/test" element={<Search />} />
                </Routes>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search by title or author");

        // 검색어 입력
        fireEvent.change(input, { target: { value: "React" } });

        // 검색어가 쿼리에 적용
        await waitFor(() => {
            expect(navigateMock).toHaveBeenCalledWith("/test?page=1&query=React");
        });
    });

    it("검색어 입력 시 page 값이 항상 DEFAULT_PAGE로 설정되는지 확인", async () => {
        render(
            <MemoryRouter initialEntries={["/test?page=3&query=React"]}>
                <Routes>
                    <Route path="/test" element={<Search />} />
                </Routes>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search by title or author");

        // 검색어 입력
        fireEvent.change(input, { target: { value: "Js" } });

        // 검색어가 쿼리에 적용되고 page가 1로 초기화
        await waitFor(() => {
            expect(navigateMock).toHaveBeenCalledWith("/test?page=1&query=Js");
        });
    });
});