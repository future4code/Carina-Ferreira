import React from 'react';
import { ButtonStyle, PaginationStyle } from './styled';

const maxItems = 5;
const maxLeft = (maxItems - 1) / 2;

const Pagination = ({limit, total, offset, setOffset}) => {
    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const firstPage = Math.max(current - maxLeft, 1);

    return (
        <PaginationStyle>
            {Array.from({length: Math.min(maxItems, pages)})
            .map((_, index) => index + firstPage)
            .map((page) => (
                <li key={page}>
                    <ButtonStyle onClick={() => setOffset((page - 1) * limit)}>
                        {page}
                    </ButtonStyle>
                </li>
            ))}
        </PaginationStyle>
      );
    }
    
    export default Pagination;