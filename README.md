# 어드레감디 
![image](https://user-images.githubusercontent.com/106373580/233271710-d2a7df69-ec2b-42d8-b75f-c686ea945768.png)

🔗 [[kakao x goorm] 9oormthon 5기 대상 🏆](https://goorm.notion.site/443e8520bfd84ffebc12b868f2281ea7)

<br>

## 서비스 소개

    어드레감디👩‍🦽🍊 : ’어디로 갈까요?’의 제주 방언

    휠체어 사용자의 취향과 편의시설을 모두 고려한 제주 관광지 추천 서비스입니다.

<br>

## 기능 소개

### Step 1. 취향과 조건에 맞게 선택 (온보딩)

<br>

![image](https://user-images.githubusercontent.com/106373580/233274950-99f7c524-d815-49fc-8f21-6fea7b13aff8.png)

<br>
 
> **1) 동행인 여부를 선택 후, 개인 혹은 팀의 여행 닉네임 작성** 
> <br>
> 동행인이 없다면 혼자서도 자유롭게 돌아다닐 수 있는 장소로 추천합니다.

<br>

> **2) 필요 시설에 대한 중복 옵션 가능**
> <br>
> 무단차, 경사로 등 이동에 필요한 정보도 제공합니다.

<br>

> **3) 취향에 따라 선호하는 장소 선택**
> <br>
> 자연경관 구경부터 트래킹, 문화예술, 쇼핑 등의 장소 카테고리화 하여 제공합니다.

<br>

### Step 2. 선택 결과 맞춤형 목록 보기

<br>

![image](https://user-images.githubusercontent.com/106373580/233276081-657306d3-62e0-43e7-ae19-4d99cbe34db6.png)

<br>

> **1) 나만을 위한 제주 관광지 맞춤형 목록**
> <br>
> 나와 가장 가까운 위치 순으로 장소 목록을 제공합니다.

<br>

> **2) 장소별 특징과 필요 시설을 바로 확인**
> <br>
> 장소별 사진과 장소별 보유 편의시설에 대한 아이콘으로 나타냅니다.

<br>

> **3) 사용자의 맞춤형 목록을 카카오톡으로 공유**
> <br>
> 검색 결과를 공유하고 함께 방문할 장소를 정할 수 있습니다.

<br>

### Step 3. 궁금한 장소 상세 정보 확인하기

<br>

![image](https://user-images.githubusercontent.com/106373580/233280415-475b4b26-55bf-4b64-a586-8fe88b6fdd65.png)

<br>

> **1) 방문할 장소에 대한 상세 설명과 이동 환경을 확인**
> <br>
> 방문 장소의 실제 이동 환경 설명합니다.
> 출입구까지 턱이 있는지, 단차가 있다면 크기가 얼마나 되는지 등의 세심한 정보를 제공합니다.

<br>

> **2) 길 안내와 전화 연결 가능**
> <br>
> 주소, 전화번호를 복사해 붙여넣을 필요 없이 바로 해당 기능으로 이동합니다.

<br>

## 핵심 기술

### Frontend
기술 스택 : React, TypeScript, Apollo Client, Zustand, Framer motion, Styled-components

### Backend
기술 스택 : NestJS, GraphQL, Prisma, Supabase (PostgreSQL), Github actions, AWS(EKS, ECR)

<br>

## 시스템 아키텍처

![image](https://user-images.githubusercontent.com/106373580/233283066-064a9c4e-65a4-44be-ba5b-52b87cd9dd58.png)

**해당 시스템 아키텍처는 구름톤 대회 당시 아키텍처 입니다.**

현재는 프론트엔드는 Vercel, 백엔드는 Render로 배포되어 있습니다.
<br>
해커톤 당시 발급받았던 EKS 계정이 만료되어, 비용적인 측면을 고려하여 무료 Hosting 플랫폼으로 배포방식을 전환하였습니다.

<br>

## 활용 데이터
**열린관광 무장애 여행지 (출처: 한국관광공사)** <br>
https://access.visitkorea.or.kr/main/main.do

<br>

## 팀원 및 역할

<table>
    <th width="20%" style="text-align:center"><a href="https://github.com/teorgeos" target="_blank">서혜빈</th>
    <th width="20%" style="text-align:center"><a href="https://github.com/suhyun22" target="_blank">김수현</th>
    <th width="20%" style="text-align:center"><a href="https://github.com/raymondanythings" target="_blank">엽용현</a></th>
    <th width="20%" style="text-align:center"><a href="https://github.com/goodafteryoon" target="_blank">최윤나</a></th>
    <th width="20%" style="text-align:center"><a href="https://github.com/GwangjoGong" target="_blank">공광조</a></th>
    <tr>
        <td>
            <img src="https://user-images.githubusercontent.com/106373580/233285256-1946cfcd-5ae3-40ff-b39b-6ff19df3da93.png"/>
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/106373580/233285631-99f54808-2c23-4b32-909c-c66e1b0759a6.png"/>
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/106373580/233285947-61926021-db9d-4f2b-8b7b-e5ef37c8d686.png"/>
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/106373580/233285807-ea297fe2-d6b3-4539-b7a3-fd7c96b3408c.png"/>
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/106373580/233286272-269eef09-e7ec-4384-b705-b300fa28199c.png"/>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Product <br> Manager</strong>
        </td>
        <td>
            <strong>UX/UI <br> Designer</strong>
        </td>
        <td>
            <strong>Front-end <br> Developer</strong>
        </td>
        <td>
            <strong>Front-end <br> Developer</strong>
        </td>
        <td>
            <strong>Back-end <br> Developer</strong>
        </td>
    </tr>
</table>

<br>




