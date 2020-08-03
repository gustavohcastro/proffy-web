import React from 'react';

import './teacheritem.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/23188886?s=460&u=a4e73b43dae54c7bdcfcc800e39106ea27988e8f&v=4" alt="User Logo"/>
                <div>
                    <strong>Gustavo Castro</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc diam, ultricies a odio eu, aliquet aliquam ante. 
                <br/>Proin urna metus, vehicula eu sem nec, auctor faucibus lacus. Nulla auctor justo ac metus ullamcorper ornare. Nullam maximus ante at arcu vestibulum efficitur. Donec at odio sollicitudin, faucibus lacus quis, molestie ex. Vestibulum eget ante malesuada, laoreet nunc non, suscipit ante. Donec eget nibh urna. 
            </p>
            <footer>
                <p>Preço/hora <strong>R$80,00</strong></p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
  );
}

export default TeacherItem;
