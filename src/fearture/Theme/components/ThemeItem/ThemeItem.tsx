import LazyImg from 'components/LazyImage';
import { ThemeData } from 'model/common';
import React from 'react';
import './ThemeItem.scss';

interface ThemeItemProps {
    theme: ThemeData;
    onHandleChange ?: (theme :ThemeData)=> void
}

const ThemeItem = ({ theme, onHandleChange } : ThemeItemProps) => {
    return (
        <div className="theme-item" onClick={() => onHandleChange?.(theme)}>
            <LazyImg src={theme.imgSet} />
        </div>
    );
};

export default ThemeItem