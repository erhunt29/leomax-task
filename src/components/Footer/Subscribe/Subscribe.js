import React, {Component} from 'react';
import subscribe from '../../../images/mailing.png';

class Subscribe extends Component {
    render() {
        return (
            <div className={'main-footer__subscribe subscribe'}>
                <form action="" className={'subscribe__form'}>
                    <img src={subscribe} alt="" className={'subscribe__image'}/>
                    <p className={'subscribe__paragraph'}>Подпишитесь на наши рассылки <br/> и узнавайте первыми об акциях и распрадажах</p>
                    <input type="text" className={'subscribe__input'} placeholder={'Введите Ваш e-mail'}/>
                    <button className={'subscribe__button'}>Подписаться</button>
                </form>
            </div>
        );
    }
}

export default Subscribe;