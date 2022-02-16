import s from './userPage.module.sass';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

const UserPage = ({users, portionSize, currentPage, onPageChanged, 
    totalPageCount, pageSize, followingInProcess, 
    follow, unfollow, portionPagination, setPortionPagination}) => {

    const userList = users.map(u => <User user={u} key={u.id} 
        followingInProcess={followingInProcess} follow={follow} unfollow={unfollow} />)

    return (
        <div className={s.userWrapper}>
            <Pagination 
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalPageCount={totalPageCount}
                pageSize={pageSize}
                portionSize={portionSize}
                portionPagination={portionPagination}
                setPortionPagination={setPortionPagination}
            />
            {userList}
        </div>
    )
}

export default UserPage;