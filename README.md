# 🍰 Piece of Cake
![케이크](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/fc7d2199-61c4-4a5b-922b-671964f57bed)

<br>
<br>
<br>

## 목차
- [프로젝트 정보](#프로젝트-정보)
- [폴더 구조](#폴더-구조)
- [사용 기술](#사용-기술)
- [구현 기능](#구현-기능)
- [트러블 슈팅](#트러블-슈팅)

<br>
<br>
<br>

## 프로젝트 정보
### 🍰 Piece of Cake 벤딩머신
>**구현 기간 : 2024.04.28 ~ 2024.04.30** <br>
>
>**배포 사이트 :**  <strong>[배포 URL 바로가기](https://piece-of-cake-store.netlify.app/)</strong>

<br>
<br>
<br>

## 폴더 구조
```
🍰 PIECE-OF-CAKE
├─ 📦 public
├─ 📦 src
│  ├─ 📂 assets
│  ├─ 📂 components
│  │  ├─ 📂 Button
│  │  ├─ 📂 Cake
│  │  ├─ 📂 Cart
│  │  ├─ 📂 Header
│  │  ├─ 📂 Modal
│  │  ├─ 📂 Section
│  │  ├─ 📂 Slider
│  │  ├─ 📂 User
│  │  └─ 📂 Wallet
│  ├─ 📂 data
│  ├─ 📂 hooks
│  ├─ 📂 pages
│  │  ├─ 📂 ErrorPage
│  │  ├─ 📂 MainPage
│  │  └─ 📂 StartPage
│  ├─ 📂 state
│  │  ├─ 📂 atoms
│  │  └─ 📂 selectors
│  ├─ 📂 styles
│  ├─ 📂 types
|  ├─ 📜 App.tsx
|  └─ 📜 index.tsx
```

<br>
<br>
<br>

## 사용 기술
#### [ FrontEnd ]
<div>
<img src="https://img.shields.io/badge/typescript-3178C6?style=square&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Recoil-3578E5?style=square&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=square&logo=styled components&logoColor=white">
</div>

<br>

#### [ Version ]
```
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-hook-form": "^7.51.4",
"react-router-dom": "^6.23.0",
"react-scripts": "5.0.1",
"recoil": "^0.7.7",
"styled-components": "^6.1.8",
"styled-reset": "^4.5.2",
"typescript": "^4.9.5",
"web-vitals": "^2.1.4"
```

<br>
<br>
<br>

## 구현 기능
|   초기 화면   |   메뉴얼 모달  |
| :---------: | :---------: |
| ![메인](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/2593d3ca-6159-4332-aa52-0279f5817b39) | ![메뉴얼](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/667b91dd-da61-4cc3-b91c-921d5b96067a) |
<br>

|  소지금 충전 |  입금액 충전   |
|:---------: | :---------: |
| ![소지금](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/508bfb65-3e46-4f14-9dbe-a8eacee00ce2) | ![입금액](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/d250be3c-abcf-4ef8-856b-a7467062b871) |
<br>

| 아이템 획득 |  장바구니 초기화  |
| :---------: | :---------: |
| ![획득](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/c5031ece-3970-4af3-8d21-87f2d86ca734) | ![초기화](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/706ab06e-33ef-4872-aa0a-5b93b6b92ef1) |
<br>

|  거스름돈 반환  |  404 에러  |
| :---------: | :---------: |
| ![반환](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/db826a62-61dc-4bc0-b385-770ac68bb4d3) | ![에러](https://github.com/hyeonbinnn/piece-of-cake/assets/117449788/d991c250-534d-45d9-8960-bb1f2dbaf3f9) |

<br>
<br>
<br>

## 트러블 슈팅
### 1. 상태 관리 개선
총금액을 계산할 때, `calculateTotalPrice` 함수를 컴포넌트 내에서 직접 호출하고, `useRecoilState` 훅을 통해 상태 저장소의 `totalCartItemState` 상태를 가져와서 사용하고 있다.

하지만 이는 컴포넌트 내에 로직이 섞여 복잡성이 증가하고, 상태 업데이트와 같은 다른 부분에 영향을 미칠 수 있다!

#### [ 변경 전 ]
```tsx
// TotalCart.tsx
const TotalCart = () => {
  const [cartItem, setCartItem] = useRecoilState(totalCartItemState);

  const calculateTotalPrice = (): number => {
    return cartItem.reduce(
      (total: number, item: SelectedCakeItem) => total + item.cost * item.quantity,
      0
    );
  };
}

...

return (
  <>
    <S.TotalPrice>총금액 : {calculateTotalPrice().toLocaleString()}원</S.TotalPrice>
  </>
  )
}
```
<br>

따라서 총금액 계산하는 부분을 셀렉터를 사용해 상태 관리 로직에서 분리시켜 컴포넌트는 UI에만 집중하고, 선택자는 데이터의 계산과 처리에 집중할 수 있도록 했다.
```ts
// selector.ts
export const totalPriceSelector = selector<number>({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cartItems: SelectedCakeItem[] = get(totalCartItemState);
    return cartItems.reduce(
      (total: number, item: SelectedCakeItem): number => total + item.cost * item.quantity,
      0
    );
  },
});
```
<br>

`useRecoilValue` 훅을 통해 셀렉터에서 만든 `totalPriceSelector`를 가져와서 `totalPrice` 변수에 저장해서 사용하면 코드가 간결해지고, 유지보수에 용이해진다!

#### [ 변경 후 ]
```tsx
// TotalCart.tsx
const TotalCart = () => {
  const [cartItem, setCartItem] = useRecoilState(totalCartItemState);
  const totalPrice = useRecoilValue(totalPriceSelector);

...

return (
  <>
    <S.TotalPrice>총금액 : {totalPrice.toLocaleString()}원</S.TotalPrice>
  </>
  )
}
```
<br>
<br>

### 2. 초기화 시, 잔액 합산 오류
장바구니 초기화 버튼을 클릭할 때, `cartItemRefresh` 함수를 통해 장바구니에 있는 아이템들을 초기화시키며 `useRecoilState` 훅을 통해 상태 저장소의 `totalCartItemState` 상태를 가져와서`setCartItem`을 업데이트하고 있다.

초기화가 되면서 총금액이 다시 잔액과 합산되어 계산되어야 하는데, 장바구니만 초기화가 이루어지고 있다!

#### [ 변경 전 ]
```tsx
// TotalCart.tsx
const TotalCart = () => {
  const [cartItem, setCartItem] = useRecoilState(totalCartItemState);

  const cartItemRefresh = (): void => {
    setCartItem([]);
  };

...

return (
  <>
    <S.RefreshBtn onClick={cartItemRefresh} />
  </>
  )
}
```
<br>

따라서 장바구니를 초기화한 뒤, 총금액과 소지금을 더해주는 값을 계산해야하기 때문에, 셀렉터에서 총금액 + 잔액을 계산하는 선택자 `totalPriceAmountSelector`를 만들었다.
```ts
// selector.ts
export const totalPriceAmountSelector = selector<number>({
  key: 'totalPriceAmountSelector',
  get: ({ get }) => {
    const cartItems = get(totalPriceSelector);
    const balance = get(balanceState);
    return cartItems + balance;
  },
});
```
<br>

그리고 `cartItemRefresh` 함수에서 `useSetRecoilState` 훅을 통해 상태 저장소에서 잔액 관련 `balanceState` 상태를 가져온다. 

그 다음, `useRecoilValue` 훅을 통해 `totalPriceAmountSelector` 선택자를 `totalPriceBalance` 변수에 저장하고, `setBalance`를 통해 해당 변수를 업데이트 하면 된다!

이렇게 하면 장바구니를 초기화하는 동시에 잔액도 함께 업데이트된다! 😉

#### [ 변경 후 ]
```tsx
// TotalCart.tsx
const TotalCart = () => {
  const [cartItem, setCartItem] = useRecoilState(totalCartItemState);
  const totalPriceBalance = useRecoilValue(totalPriceAmountSelector);
  const setBalance = useSetRecoilState(balanceState);

  const cartItemRefresh = (): void => {
    // 1. 새로고침 버튼을 누르면 장바구니 초기화
    // 2. 잔액 === 총금액 + 잔액
    setCartItem([]);
    setBalance(totalPriceBalance);
  };

...

return (
  <>
    <S.RefreshBtn onClick={cartItemRefresh} />
  </>
  )
}
```
<br>
<br>

### ✔️ 변경 컴포넌트 전체 코드
#### [ 변경 전 ] 
```tsx
import * as S from './TotalCart.style';
import Wallet from '../Wallet/Wallet';
import ManualModal from '../Modal/ManualModal';
import useModal from '../../hooks/useModal';
import { SelectedCakeItem, totalCartItemState } from '../../state/atoms/atoms';
import { useRecoilState } from 'recoil';

const TotalCart = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [cartItem, setCartItem] = useRecoilState(totalCartItemState);

  const calculateTotalPrice = (): number => {
    return cartItem.reduce(
      (total: number, item: SelectedCakeItem) => total + item.cost * item.quantity,
      0
    );
  };

  const cartItemRefresh = (): void => {
    setCartItem([]);
  };
  return (
    <>
      <Wallet />
      <S.Wrapper>
        <S.H2>장바구니</S.H2>
        <S.GetCartUl>
          {cartItem.map((item: SelectedCakeItem) => (
            <S.GetCartLi>
              <S.GetCartImg src={item.img} alt={item.name} />
              <S.GetCartName>{item.name}</S.GetCartName>
              <S.GetCartStrong>{item.quantity}</S.GetCartStrong>
            </S.GetCartLi>
          ))}
        </S.GetCartUl>
        <S.BottomBox>
          <S.ButtonBox>
            <S.ManualBtn onClick={openModal}>설명서</S.ManualBtn>
            <S.RefreshBtn onClick={cartItemRefresh} />
          </S.ButtonBox>
          <S.TotalPrice>총금액 : {calculateTotalPrice().toLocaleString()}원</S.TotalPrice>
        </S.BottomBox>
      </S.Wrapper>
      {isModalOpen && <ManualModal onClose={closeModal} />}
    </>
  );
};

export default TotalCart;
```
<br>

#### [ 변경 후 ]
```ts
// selector.ts
import { selector } from 'recoil';
import { balanceState, SelectedCakeItem, totalCartItemState } from '../atoms/atoms';

// 총금액 계산
export const totalPriceSelector = selector<number>({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cartItems: SelectedCakeItem[] = get(totalCartItemState);
    return cartItems.reduce(
      (total: number, item: SelectedCakeItem): number => total + item.cost * item.quantity,
      0
    );
  },
});

// 총금액 + 잔액
export const totalPriceAmountSelector = selector<number>({
  key: 'totalPriceAmountSelector',
  get: ({ get }) => {
    const cartItems = get(totalPriceSelector);
    const balance = get(balanceState);
    return cartItems + balance;
  },
});
```

<br>

```tsx
import * as S from './TotalCart.style';
import Wallet from '../Wallet/Wallet';
import ManualModal from '../Modal/ManualModal';
import useModal from '../../hooks/useModal';
import { balanceState, SelectedCakeItem, totalCartItemState } from '../../state/atoms/atoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { totalPriceAmountSelector, totalPriceSelector } from '../../state/selectors/selector';

const TotalCart = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [cartItem, setCartItem] = useRecoilState(totalCartItemState);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const totalPriceBalance = useRecoilValue(totalPriceAmountSelector);
  const setBalance = useSetRecoilState(balanceState);

  const cartItemRefresh = (): void => {
    // 1. 새로고침 버튼을 누르면 장바구니 초기화
    // 2. 잔액 === 총금액 + 잔액
    setCartItem([]);
    setBalance(totalPriceBalance);
  };
  return (
    <>
      <Wallet />
      <S.Wrapper>
        <S.H2>장바구니</S.H2>
        <S.GetCartUl>
          {cartItem.map((item: SelectedCakeItem) => (
            <S.GetCartLi>
              <S.GetCartImg src={item.img} alt={item.name} />
              <S.GetCartName>{item.name}</S.GetCartName>
              <S.GetCartStrong>{item.quantity}</S.GetCartStrong>
            </S.GetCartLi>
          ))}
        </S.GetCartUl>
        <S.BottomBox>
          <S.ButtonBox>
            <S.ManualBtn onClick={openModal}>설명서</S.ManualBtn>
            <S.RefreshBtn onClick={cartItemRefresh} />
          </S.ButtonBox>
          <S.TotalPrice>총금액 : {totalPrice.toLocaleString()}원</S.TotalPrice>
        </S.BottomBox>
      </S.Wrapper>
      {isModalOpen && <ManualModal onClose={closeModal} />}
    </>
  );
};

export default TotalCart;
```


<br>
<br>
<br>
