function editAvatar () {
    const personalEdit = document.querySelector('.personal-edit'),
    personalAvatar = document.querySelector('.personal-avatar'),
    personalAvatarActive = document.querySelector('.personal-avatar-active'),
    personalAvatarImg = document.querySelector('.personal-avatar-active img'),
    personalAvatarChoice = document.querySelector('.personal-avatar-choice'),
    personalAvatars = document.querySelectorAll('.personal-avatar-choice-item img');

    personalEdit.addEventListener('click', () => {
        personalAvatar.style.width = '100%';
        personalAvatarActive.style.display = 'none';
        personalAvatarChoice.style.display = 'flex';

        personalAvatars.forEach(item => {
            item.addEventListener('click', () => {
                personalAvatarImg.src = item.src;
                personalAvatarChoice.style.display = 'none';
                personalAvatarActive.style.display = 'block';
                personalAvatar.style.width = '30%';

                localStorage.setItem('avatar', item.src);
            });
        });
    });
}

export default editAvatar;