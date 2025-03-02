# BookManager
## 🔗 [배포 사이트](https://d354hlenfgy3gn.cloudfront.net/)

## 기술 스택
### **Frontend**
- **Core**: <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/>, <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>

- **Build & Config**: <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white"/>

- **State Management & Networking**: <img src="https://img.shields.io/badge/TanStack Query-FF4154?style=flat&logo=reactquery&logoColor=white"/>

- **UI & Styling**: <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/>, <img src="https://img.shields.io/badge/React Icons-61DAFB?style=flat&logo=react&logoColor=white"/>

- **Quality & Testing**: <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white"/>, <img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white"/>, <img src="https://img.shields.io/badge/Testing Library-FF4154?style=flat&logo=testinglibrary&logoColor=white"/>

### **Backend**
- **Core**: <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/>, <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white"/>, <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white"/>

- **Database**: <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white"/>

- **Utilities**: <img src="https://img.shields.io/badge/Dotenv-ECD53F?style=flat&logo=dotenv&logoColor=black"/>, <img src="https://img.shields.io/badge/Body Parser-000000?style=flat&logoColor=white"/>, <img src="https://img.shields.io/badge/CORS-000000?style=flat&logoColor=white"/>  

- **Development Tools**: <img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=black"/>, <img src="https://img.shields.io/badge/TSX-3178C6?style=flat&logoColor=white"/>  

### 배포 환경 (AWS)
| 서비스 | 역할 |
|--------|------|
| <img src="https://img.shields.io/badge/AWS S3-569A31?style=flat&logo=amazons3&logoColor=white"/> | **프론트엔드 정적 파일 (React 빌드 파일) 저장** |
| <img src="https://img.shields.io/badge/AWS CloudFront-232F3E?style=flat&logo=amazonaws&logoColor=white"/> | **CDN을 이용한 프론트엔드 배포 및 캐싱 최적화** |
| <img src="https://img.shields.io/badge/AWS EC2-FF9900?style=flat&logo=amazonec2&logoColor=white"/> | **백엔드 서버 호스팅 (Node.js + Express)** |
| <img src="https://img.shields.io/badge/PM2-2B037A?style=flat&logo=pm2&logoColor=white"/> | **백엔드 서버 프로세스 관리 및 자동 재시작** |

## 실행 화면
1. 검색 및 페이지네이션, 상세 보기

2. 도서 생성

3. 도서 수정, 삭제

4. ISBN 중복시 FallBack

## 구현 기능
### 책 목록 조회  
- 책 목록을 테이블 형식으로 보여주고, 한 페이지당 10권씩 표시합니다.
- 페이지네이션으로 탐색 기능을 제공합니다.

### 검색 기능  
- 검색어를 입력하면 쿼리 파라미터가 자동으로 변경되며, 해당 조건에 맞는 책 목록이 업데이트됩니다.
- 검색 시 debounce를 적용해, 검색이 멈추고 300ms 뒤에 쿼리가 업데이트 됩니다.
- 페이지네이션과 연동되어, 검색어와 페이지에 따라 10권씩 데이터를 불러옵니다.  

### 책 상세 조회  
- 책 제목을 클릭하면 모달이 띄워져 해당 책의 정보를 확인할 수 있습니다.  

### 책 추가 및 수정  
- 새로운 책을 추가할 수 있으며, 기존 책의 정보를 수정할 수 있습니다.  
- 저장 후 자동으로 홈으로 이동해 업데이트된 책 테이블을 보여줍니다.

### 책 삭제  
- 책을 삭제할 수 있습니다.

### 로딩 처리
- `useSuspense`에서는 fallback UI로 스켈레톤을 표시합니다.  
- `useQuery`에서도 데이터 로딩 시 스켈레톤 UI를 표시합니다.
- `useQuery` 및 `mutation`의 `isPending` 상태를 활용해 버튼에 로딩을 표시합니다.  
- 다른 버튼들은 disabled 상태로 설정하여 중복 클릭을 방지합니다.

### 에러 처리 
- `fetch` 및 `TanStack Query`에서 발생한 에러는 `throw`하여 전역적에서 처리합니다.
- `ErrorBoundary`를 활용하여 오류를 감지하고 사용자에게 적절한 안내 메시지를 제공합니다.
- 서버에서 반환하는 HTTP 상태 코드(400, 404, 409, 500, 503)에 따라 적절한 메시지를 표시합니다.
- 예를 들어, 이미 존재하는 ISBN-13을 입력하면 409 오류 메시지를 표시하고, 서버 오류 발생 시 500 오류 메시지를 보여줍니다.
- 요청 실패 시, ErrorFallback 컴포넌트를 통해 사용자에게 안내 메시지를 표시하고 돌아가기 버튼으로 다시 전 상태로 돌아갈 수 있습니다.

## 폴더구조
### **Frontend**

```
📦src                            # 프로젝트의 메인 소스 디렉토리
 ┣ 📂assets                      # 정적 파일(이미지, 아이콘 등) 보관
 ┃ ┗ 📜react.svg                 
 ┣ 📂components                  # 재사용 가능한 UI 컴포넌트 모음
 ┃ ┣ 📂books                     # 도서 관련 컴포넌트
 ┃ ┃ ┣ 📜BookDetail.tsx          # 개별 도서 상세 정보 화면
 ┃ ┃ ┣ 📜BooksTable.tsx          # 도서 목록을 테이블 형식으로 렌더링
 ┃ ┃ ┣ 📜BooksTableRow.tsx       # 도서 테이블의 개별 행 컴포넌트
 ┃ ┃ ┗ 📜Search.tsx              # 도서 검색 입력창 및 검색 기능 구현
 ┃ ┣ 📂common                    # 공통적으로 사용되는 UI 컴포넌트
 ┃ ┃ ┣ 📜Buttons.tsx             # 생성, 삭제, 수정 버튼을 모아놓은 파일
 ┃ ┃ ┣ 📜Form.tsx                # 입력 폼 컴포넌트
 ┃ ┃ ┣ 📜Modal.tsx               # 모달 UI 컴포넌트
 ┃ ┃ ┗ 📜Pagination.tsx          # 페이지네이션(페이징) 컴포넌트
 ┃ ┣ 📂errorBoundary             # 에러 처리 관련 컴포넌트
 ┃ ┃ ┣ 📜ErrorBoundary.tsx       # 전역 에러 핸들링을 위한 Error Boundary 컴포넌트
 ┃ ┃ ┗ 📜ErrorFallBack.tsx       # 에러 발생 시 보여줄 FallBack UI 컴포넌트
 ┃ ┣ 📂skeletons                 # 로딩 시 스켈레톤 UI 컴포넌트
 ┃ ┃ ┣ 📜BooksTableSkeleton.tsx  # 도서 목록 로딩 시 보여줄 스켈레톤 UI
 ┃ ┃ ┣ 📜EditFormSkeleton.tsx    # 도서 편집 폼 로딩 시 스켈레톤 UI
 ┃ ┃ ┗ 📜PaginationSkeleton.tsx  # 페이지네이션 로딩 시 스켈레톤 UI
 ┃ ┣ 📜Layout.tsx                # 애플리케이션의 기본 레이아웃 컴포넌트
 ┃ ┗ 📜NotFound.tsx              # 404 페이지 (없는 경로 접근 시 표시)
 ┣ 📂constants                   # 상수값 저장
 ┃ ┣ 📜HTTPErrorMessage.ts       # HTTP 상태 코드에 따른 에러 메시지 상수
 ┃ ┗ 📜index.ts                  # 프로젝트 전반에서 사용하는 상수값 모음
 ┣ 📂hooks                       # 커스텀 훅 모음
 ┃ ┣ 📂Queries                   # React Query 관련 데이터 요청 훅
 ┃ ┃ ┣ 📜useBookDetailQuery.tsx  # 도서 상세 정보를 불러오는 쿼리 훅
 ┃ ┃ ┣ 📜useCreateBookMutation.tsx # 도서 생성 요청을 수행하는 뮤테이션 훅
 ┃ ┃ ┣ 📜useDeleteBooksMutation.tsx # 도서 삭제 요청을 수행하는 뮤테이션 훅
 ┃ ┃ ┣ 📜useEditBookMutation.tsx   # 도서 수정 요청을 수행하는 뮤테이션 훅
 ┃ ┃ ┣ 📜useFilteredBooksQuery.tsx # 필터링된 도서 목록을 불러오는 쿼리 훅
 ┃ ┃ ┗ 📜useTotalPageQuery.tsx     # 전체 페이지 수를 계산하는 쿼리 훅
 ┃ ┣ 📜useFormHandler.tsx          # 폼 입력값을 핸들링하는 커스텀 훅
 ┃ ┗ 📜useOnClickOutside.tsx       # 외부 클릭 감지를 위한 커스텀 훅
 ┣ 📂pages                        # 개별 페이지 컴포넌트
 ┃ ┣ 📜Create.tsx                 # 도서 추가 페이지
 ┃ ┣ 📜Edit.tsx                   # 도서 수정 페이지
 ┃ ┗ 📜Home.tsx                   # 도서 목록 조회 및 검색이 가능한 홈 페이지
 ┣ 📂routers                      # 라우팅 관련 파일
 ┃ ┗ 📜routes.tsx                 # 애플리케이션의 라우트 정의
 ┣ 📂tests                        # 테스트 코드 모음
 ┃ ┣ 📂components                 # UI 컴포넌트 테스트
 ┃ ┃ ┗ 📜Search.test.tsx          # 검색 컴포넌트 테스트
 ┃ ┣ 📂hooks                      # 훅 관련 테스트
 ┃ ┃ ┣ 📜useBookDetailQuery.test.tsx # 도서 상세 조회 훅 테스트
 ┃ ┃ ┣ 📜useCreateBookMutation.test.tsx # 도서 생성 훅 테스트
 ┃ ┃ ┗ 📜useFilteredBooksQuery.test.tsx # 필터링된 도서 목록 쿼리 훅 테스트
 ┃ ┗ 📜setupTests.ts              # 테스트 환경 설정 파일
 ┣ 📂types                        # 타입 정의 파일
 ┃ ┗ 📜index.ts                   # 프로젝트에서 사용하는 타입 모음
 ┣ 📂utils                        # 유틸리티 함수 모음
 ┃ ┣ 📜HTTPError.ts               # HTTP 에러 핸들링 유틸리티
 ┃ ┗ 📜parseFormData.ts           # 폼 데이터를 변환하는 유틸리티
 ┣ 📜App.css                      # 전체 애플리케이션 스타일
 ┣ 📜App.tsx                      # 메인 앱 컴포넌트, 라우트 설정 포함
 ┣ 📜index.css                    # 전역 스타일 파일
 ┣ 📜main.tsx                     # React 앱 진입점, 루트 컴포넌트 렌더링
 ┗ 📜vite-env.d.ts                 # Vite 환경 변수 타입 정의
```

### **Backend**

```
📦Backend
 ┣ 📂constants
 ┃ ┗ 📜index.ts                # 프로젝트에서 사용하는 상수값을 정의한 파일
 ┣ 📂middlewares
 ┃ ┗ 📜cors.ts                 # CORS 설정을 위한 미들웨어 파일
 ┣ 📂routes
 ┃ ┗ 📜book.ts                 # 도서 관련 API 라우트를 정의한 파일
 ┣ 📜.env                      # 환경변수를 저장하는 파일 (DB 연결 정보 등)
 ┣ 📜.gitignore                # Git에서 제외할 파일 및 폴더 목록을 지정한 파일
 ┣ 📜app.ts                    # Express 서버의 엔트리 포인트, 서버 설정, 미들웨어 적용 및 MySQL 데이터베이스 연결
 ┣ 📜package-lock.json         # 프로젝트 의존성 버전 관리 파일
 ┗ 📜package.json              # 프로젝트 메타정보 및 의존성 목록을 정의한 파일
```

## 설치 및 실행
### **Frontend**
```sh
# 저장소 클론
git clone https://github.com/96limshyun/BookManager.git

# FrontEnd 폴더로 이동
cd BookManager/FrontEnd

# 패키지 설치
npm install

# 환경변수 설정
# FrontEnd 루트 디렉토리에 .env 파일을 생성하고 아래 내용을 추가하세요.

VITE_API_URL=http://localhost:3000 // 로컬에서 백엔드를 구동하는 경우

VITE_API_URL=https://3.34.197.120.nip.io // EC2에 배포된 백엔드를 사용하고자 하는 경우

# 실행
npm run dev

# 테스트 실행
npm test
```
- http://localhost:5173 으로 접속하시면 됩니다.
----
### **Backend**
- Mysql 데이터베이스 및 스키마 생성

```sh
# Mysql 접속
mysql -u root -p
# 비밀번호 입력

# 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS books_db
    DEFAULT CHARACTER SET = 'utf8mb4'
    COLLATE = 'utf8mb4_unicode_ci';

# 데이터베이스 생성 확인
# books_db가 생성되어야 합니다.
SHOW DATABASES;

# 데이터 베이스 선택
USE books_db;

#  테이블 생성
CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  bookname VARCHAR(255) NOT NULL,
  authors VARCHAR(255) NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  isbn13 VARCHAR(13) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  quantity INT NOT NULL
);

# 목데이터 삽입
INSERT INTO books (bookname, authors, publisher, isbn13, quantity) VALUES
('테스트1', '테스트1', '테스트1', '9788998139810', 10),
('테스트2', '테스트2', '테스트2', '9788998139827', 7),
('테스트3', '테스트3', '테스트3', '9788998139834', 5),
('테스트4', '테스트4', '테스트4', '9788998139841', 12),
('테스트5', '테스트5', '테스트5', '9788998139858', 8);

# 데티어 삽입 확인
SELECT * FROM books;
```

-----
- 저장소 클론 및 실행

```sh
# 클론 위에서 이미 클론을 했다면 /Backend 폴더로 이동하면 됩니다.
git clone https://github.com/96limshyun/BookManager.git

# /Backend 폴더로 이동
cd BookManager/Backend

# 패키지 설치
npm install

# 환경변수 설정
# Backend 루트 디렉토리에 .env 파일을 생성하고 아래 내용을 추가하세요.
DB_HOST=localhost                # MySQL 호스트
DB_PORT=3306                     # MySQL 포트
DB_USER=root                     # MySQL 사용자 이름 (기본값: root)
DB_PASSWORD=your_password        # MySQL 비밀번호 (사용자 설정)
DB_NAME=books_db                 # 사용할 데이터베이스 이름
EXPRESS_PORT=3000                # 백엔드 서버 실행 포트
DEV_URL="http://localhost:5173"  # 프론트엔드 개발 서버 URL
S3_BUCKET_URL="http://lsh-bookmanager.s3-website.ap-northeast-2.amazonaws.com/?"  # S3 정적 파일 URL
CLOUD_FRONT_URL="https://d354hlenfgy3gn.cloudfront.net"  # CloudFront 배포 URL

# 또는 BookManager/Backend/middlewares/cors.ts 의 origin 설정에 "*"로 모든 접근을 허용하셔도 됩니다.
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const corsMiddleware = cors({
    origin: "*", // "*" 로 수정, 모든 도메인 요청 허용
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
})

export default corsMiddleware

# 서버 실행
npm run dev
```
- http://localhost:3000/books 로 접속해 목으로 삽입한 데이터가 표시되는지 확인합니다.




## API 명세서
### 1. 도서 목록 조회: 제목과 저자로 필터링 후, 페이지네이션으로 10개씩 반환합니다.
- URL: `GET /books`
- 예시 `GET /books?page=1&query=React`
- 응답 예시
```json
[
  {
    "id": 1,
    "bookname": "책이름",
    "authors": "저자",
    "publisher": "출판사",
    "isbn13": "1111111111111",
    "quantity": 1
  }
  ....
]
응답 코드: 200
```
-----
### 2. 도서 상세 조회: 특정 도서의 상세 정보를 반환합니다.
- URL: `GET /books/detail`
- 예시 `GET /books/detail?id=1`
- 응답 예시
```json
{
  "id": 1,
  "bookname": "책이름",
  "authors": "저자",
  "publisher": "출판사",
  "isbn13": "1111111111111",
  "quantity": 1
}
응답 코드: 200
```
-----
### 3. 전체 페이지 수 조회: 현재 검색 조건에 맞는 전체 페이지 수를 반환합니다.
- URL: `GET /totalPage`
- 예시 `GET /totalPage?query=React`
- 응답 예시
```json
5
응답 코드: 200
```
-----
### 4. 도서 추가: 새로운 도서를 추가합니다.
- URL: `POST /books`
- 요청 예시
```json
POST /books
Content-Type: application/json

{
  "id": 1,
  "bookname": "책이름",
  "authors": "저자",
  "publisher": "출판사",
  "isbn13": "1111111111111",
  "quantity": 1
}
```

- 응답 예시(성공)
```json
{
  "message": "도서가 성공적으로 추가되었습니다."
}
응답 코드: 201
```

- 응답 예시(ISBN 중복)
```json
{
  "message": "이미 존재하는 ISBN-13입니다."
}
응답 코드: 409
```
-----
### 5. 도서 수정: 기존 도서 정보를 수정합니다.
- URL: `PUT /books/:id`
- 요청 예시
```json
PUT /books/1
Content-Type: application/json

{
  "id": 1,
  "bookname": "책이름",
  "authors": "저자",
  "publisher": "출판사",
  "isbn13": "1111111111111",
  "quantity": 1
}
```

- 응답 예시(성공)
```json
{
  "message": "도서 정보가 수정되었습니다."
}
응답 코드: 200
```

- 응답 예시(ISBN 중복)
```json
{
  "message": "이미 존재하는 ISBN-13입니다."
}
응답 코드: 409
```
---
### 6. 도서 삭제: 특정 도서를 삭제합니다.
- URL: `DELETE /books/:id`
- 요청 예시
```json
DELETE /books/1
```

- 응답 예시()
```json
{
  "message": "도서가 삭제되었습니다."
}
응답 코드: 200
```

## 프론트엔드 사전 과제
- 문제: 당신은 온라인 서점을 위한 웹 애플리케이션을 개발하고 있습니다.
- 이 애플리케이션은 상점 주인이 책을 검색하고, 상세 정보를 보고 편집하며, 각 책의 판매 수량을 확인할 수 있어야 합니다.

## 프론트엔드(React, S3)
- [x] 책 목록 페이지 구현
  - [x] 페이지네이션 적용(한 페이지당 10개 항목)
  - [x] 제목과 저자로 필터링 할 수 있는 검색 기능 구현
- [x] 책 상세 정보 페이지/뷰 구현
- [x] 책 추가/ 제거 및 수량 조절 기능

## 백엔드(MySQL, EC2)
- [x] 책 목록 조회 (GET/ api/books)
- [x] 책 상세 조회 (GET/ api/books/:id)
- [x] 책 추가 (POST/ api/books)
- [x] 책 정보 수정 (PUT/ api/books/:id)
- [x] 책 삭제 (DELETE/ api/books/:id)
