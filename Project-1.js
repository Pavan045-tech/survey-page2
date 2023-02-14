import React , { useReducer} from 'react';
import styles from './Project-1.module.css';

const First = () => {

    return(
        <div className='main'>
            <div className='navbar'>
                <nav>
                    <h1>Pavan <span>Softwares</span></h1>
                    <ul>
                        <li><a href='#'>Honbvnvnme</a></li>
                        <li><a href='#'>about</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>login</a></li>
                    </ul>
                </nav>
            </div>
            <div className='second-row'>
                <div className='first-column'>
                    <h1>Welcome to Pavan Softwares</h1>
                    <p class="para">ParagraphParagraphs are the group of sentences combined together, about a certain topic. It is a very important form of 
                        writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc. We can say that a 
                        well-structured paragraph is the essence of good writing.  The purposes of the paragraph are to give information, to 
                        explain something, to tell a story, and to convince someone that our idea is right.</p>
                    <button>Read more</button>
                </div>
                <div className='second-column'>
                    <img src='C:\Users\Pavankumarsu\Downloads\software2.jpg' ></img>
                </div>
            </div>
        </div>
    )
}

export default First
