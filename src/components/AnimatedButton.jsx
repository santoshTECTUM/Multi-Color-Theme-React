import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Btn = styled(motion.button)`
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

export default function AnimatedButton({ children, onClick }){
  return (
    <Btn
      whileHover={{ scale: 1.03, boxShadow: '0 6px 20px rgba(0,0,0,0.12)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
}