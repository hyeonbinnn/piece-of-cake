import { useState } from 'react';
import * as S from './Slider.style';
import arrow from '../../assets/arrow.svg';
import CakeList from './../Cake/CakeList';
import cakeItem from '../../data/cakeItem';
import { CakeItemData } from '../../types/data';

const Slider = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const cakesPerPage = 9;
  const totalPages = Math.ceil(cakeItem.length / cakesPerPage);

  const prevSlide = (): void => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const nextSlide = (): void => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const startIndex = currentPage * cakesPerPage;
  const endIndex = startIndex + cakesPerPage;
  const currentCakes: CakeItemData[] = cakeItem.slice(startIndex, endIndex);

  return (
    <S.Wrapper>
      {currentPage !== 0 && (
        <S.PrevBtn onClick={prevSlide} aria-label="이전 슬라이드 보기">
          <S.Img src={arrow} alt="이전 슬라이더 아이콘" />
        </S.PrevBtn>
      )}
      <CakeList cakeItem={currentCakes} aria-label="다음 슬라이드 보기" />
      {currentPage !== totalPages - 1 && (
        <S.NextBtn onClick={nextSlide}>
          <S.Img src={arrow} alt="다음 슬라이더 아이콘" />
        </S.NextBtn>
      )}
    </S.Wrapper>
  );
};

export default Slider;
