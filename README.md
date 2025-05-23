# 🏥 Foreign Patient Group Management Frontend

이 프로젝트는 삼성 서울 병원 및 다양한 기관에서 외국인 환자 데이터를 효율적으로 수집·관리할 수 있는 **외국인 환자 그룹 배정 관리 시스템**의 프론트엔드입니다. 
사용자는 소속 기관에 따라 역할 기반으로 데이터를 조회·추가할 수 있으며, 관리자(ADMIN)는 전체 데이터를 조회, 수정, 엑셀 파일로 다운로드할 수 있습니다.

## 🔗 프로젝트 링크
- **배포 주소** : [https://dltbbtrial.com/](https://stratification-tool.netlify.app)
- **연동 백엔드** : [Foreign Patient Management Backend](https://github.com/G-jjunny/Stratification-Tool)
---
  
## 🚀 프로젝트 개요

- **프로젝트명**: Foreign Patient Group Management System
- **목적**: 병원 연구소에서 외국인 환자 그룹 데이터를 통합적으로 관리할 수 있도록 기관별 접근 제어와 Excel 내보내기를 포함한 웹 인터페이스 제공
- **역할 기반 권한 제어**:
  - `ADMIN`: 전체 환자 목록 조회 및 Excel 다운로드 가능
  - `USER`: 소속 기관에 해당하는 환자만 조회/수정 가능


## ✨ 주요 기능

- 기관별 사용자 역할에 따라 환자 정보 접근 제한
- 외국인 환자 정보 CRUD (생성/조회/수정)
- 관리자 전용 Excel 다운로드 기능
- 반응형 UI 및 접근성 고려한 컴포넌트 구성


## 👤 사용자 권한

| 역할   | 기능                                                     |
|--------|----------------------------------------------------------|
| ADMIN  | 전체 환자 목록 조회, 수정, 엑셀 다운로드 가능     |
| USER   | 본인 기관 소속 환자만 조회 및 추가 가능                |

---
## ⚙️ 사용 기술 스택


### 🖼️ Frontend

| 기술                             | 설명                                                                 |
| -------------------------------- | -------------------------------------------------------------------- |
| **React**                        | 컴포넌트 기반 UI 개발을 위해 선정                                    |
| **TypeScript**                   | 정적 타입 지원으로 코드 안정성                                       |
| **Vite**                         | 빠른 개발 환경과 빌드 성능을 제공하는 번들러                         |
| **Zustand**                      | 간단하고 가벼운 글로벌 상태 관리를 하기위해 선정                     |
| **TanStack Query (React Query)** | 서버 상태와 캐싱을 효율적으로 처리하기 위해 선정                     |
| **ShadCN / Tailwind CSS**        | 접근성 있고 재사용 가능한 UI 컴포넌트 + 유틸리티 기반 CSS 프레임워크 |
| **React Hook Form + Zod**        | 폼 상태 관리 및 정적 타입 기반의 유효성 검증 처리를 하기위해 선정    |
| **Netlify**                    | 정적 사이트 배포 및 CI/CD 파이프라인 자동화를 위해 사용



## 📦 기술 스택 선택 이유

- **React + TypeScript** : 컴포넌트 재사용성과 유지보수 측면에서 최적. 타입 안정성으로 디버깅 시간 절감.
- **Vite** : 빠른 로컬 개발 환경 구축 및 빌드 속도 개선.
- **Zustand** : Context API나 Redux에 비해 설정이 단순하고 직관적임.
- **TanStack Query** : API 요청 상태, 캐싱, 리페칭 처리에 최적화된 솔루션.
- **ShadCN + Tailwind CSS** : 반응형 UI를 빠르게 개발 가능하며 디자인 시스템 구성에 용이.
- **React Hook Form + Zod** : 유효성 검사를 선언적으로 처리할 수 있음

---

## ⚙️ 아키텍처: FSD (Feature-Sliced Design)
FSD 아키텍처 기반으로 구성되었습니다. 
프론트엔드 프로젝트에서 관심사의 분리(Separation of Concern) 와 기능 중심의 모듈화(Modularization) 를 돕는 구조입니다.
FSD는 애플리케이션을 기능 단위로 분할하고, 각 기능을 독립적으로 개발, 테스트, 유지보수할 수 있도록 하는 것을 목표로 합니다.

```
  src/
├── app/                        # 앱 초기 설정 (엔트리 포인트, 라우팅, 전역 스타일 등)
│
├── pages/                      # 라우팅 단위 페이지 컴포넌트
│   └── home/
│
├── features/                   # 핵심 및 구체적인 인터렉션 단위의 기능 (register, Patient 등)
│   └── patient/
│       ├── model/              # 타입, Zod 스키마, 상태 등
│       ├── ui/                 # UI 컴포넌트
│       └── api/                # API 서비스, 쿼리 등
│
├── shared/                     # 전역에서 재사용 가능한 UI 컴포넌트, API, 상수, 유틸
│   ├── ui/                     # 버튼, 다이얼로그 등 공용 UI
│   ├── api/                    # axios 클라이언트, 공용 쿼리키 등
│   └── lib/
|   ...                   
│
└── vite.config.ts

```
