import { forwardRef } from 'react';
import './style.css';

interface Props{

}

const inputBox = forwardRef<HTMLInputElement, Props>((props: Props,ref) => {
    return(
        <div></div>
    )
});
