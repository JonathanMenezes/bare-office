import React from 'react'

const NotificationDropdown = () => {
    return (
        <div>
            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li><p className='dropdown-item'>Ação</p></li>;
                <li><p className='dropdown-item'>Outra Ação</p></li>
                <li><hr className='dropdown-divider' /></li>
                <li><p className='dropdown-item'>Alguma coisa aqui</p></li>
            </ul>
        </div>
    )
}

export default NotificationDropdown