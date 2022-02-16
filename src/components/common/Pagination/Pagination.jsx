import { useState } from 'react';
import s from './Pagination.module.sass';

const Pagination = ({totalPageCount, pageSize, currentPage, onPageChanged, 
    portionSize, setPortionPagination, portionPagination}) => {

    let totalPage = Math.ceil(totalPageCount / pageSize);
    let pages = [];

    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(totalPage / portionSize)
    let [portionNumber, setPortionNumber] = useState(portionPagination);

    const saveCurPagination = (pN) => setPortionPagination(pN)

    let leftPortionSize = (portionNumber - 1) * portionSize + 1;
    let rightPortionSize = portionNumber * portionSize;

    return (
        
        <div className={s.pagination}>

            <button
                className={s.pagination__button}
                disabled={ portionNumber > 1 ? false : true}
                onClick={ () => {setPortionNumber(portionNumber - 1); saveCurPagination(portionNumber);}}>prev</button>

            {
                pages
                .filter(p => p >= leftPortionSize && p <= rightPortionSize)
                .map(p => {
                    return <span
                        key={p}
                        className={(currentPage === p && s.selectedActive).toString()}
                        onClick={() => { onPageChanged(p) }}
                    >{p}</span>
                })
            }
        
            <button
                className={s.pagination__button}
                disabled={portionCount > portionNumber ? false : true}
                onClick={ () => {setPortionNumber(portionNumber + 1); saveCurPagination(portionNumber);}}>next</button>
     
        </div>
    )
}

export default Pagination;