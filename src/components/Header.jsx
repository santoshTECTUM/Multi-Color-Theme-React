import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import { glassStyle } from '../styles/glassStyle';

const Bar = styled.header`
  grid-area: header;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.header};
  border-bottom: 1px solid rgba(0,0,0,0.06);
`;

// const Bar = styled.header`
//   grid-area: header;
//   height: 64px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 16px;
//   ${glassStyle};
// `;


export default function Header(){
  const dispatch = useDispatch();
  const theme = useSelector(s => s.theme.name);
  return (
    <Bar>
      <div style={{ fontWeight: 700 }}>Logo</div>
      <div>
        <select value={theme} onChange={(e)=>dispatch(setTheme(e.target.value))}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="ocean">Ocean</option>
          <option value="sunset">Sunset</option>
          <option value="forest">Forest</option>
          <option value="neon">Neon</option>
        </select>
      </div>
    </Bar>
  );
}