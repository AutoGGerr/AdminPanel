import { selectors } from './selectors.js';

const optionSend = () => {
    console.log(selectors.optionsLocate)
    let user = {
        locate: '',
        members: '',
        time: '',
    }

    selectors.optionsLocate.addEventListener('change', (e) => {
        user.locate = e.target.value;
    });

    selectors.optionsTime.addEventListener('change', (e) => {
        user.time = e.target.value;
    });

    selectors.optionsCount.addEventListener('change', (e) => {
        user.members = e.target.value;
    });

    selectors.optionsBtn.addEventListener('click', () => {

        if (!user.locate) user.locate = 'не указано';
        if (!user.time) user.time = 'не указано';
        if (!user.members) user.members = 'не указано';

        console.log(user);
    });
}



export default optionSend;