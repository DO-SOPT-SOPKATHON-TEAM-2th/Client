import React from 'react'
import styled from 'styled-components'

const SaveBtn = () => {
  return (
    <St.SaveButton type='button'>완료</St.SaveButton>
  )
}

export default SaveBtn

const St = {
  SaveButton: styled.button`
        padding: 1rem;
        color: ${({ theme }) => theme.colors.white};
        ${({ theme }) => theme.fonts.Button};
    `,
}