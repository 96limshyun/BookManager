export const HTTP_ERROR_MESSAGE = {
    400: {
        HEADING: "잘못된 요청입니다.",
        BODY: "확인 후 다시 시도해주세요.",
    },
    404: {
        HEADING: "404",
        BODY: "요청하신 페이지를 찾을 수 없습니다.",
    },
    409: {
        HEADING: "이미 존재하는 ISBN-13입니다.",
        BODY: "동일한 ISBN-13을 가진 도서가 이미 존재합니다. 다른 ISBN-13을 입력해주세요.",
    },
    500: {
        HEADING: "서버 오류가 발생했습니다",
        BODY: "잠시 후 다시 요청해주세요.",
    },
    503: {
        HEADING: "서비스를 일시적으로 이용할 수 없습니다.",
        BODY: "서버가 일시적으로 과부하 상태이거나 유지보수 중입니다.",
    },
} as const;