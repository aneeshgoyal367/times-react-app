



export default function Message(props){//stateless
    let css;
    if(!props.message){
        css='hidden';
    }else{

     css="alert alert-";
     css += (props.message.type==='error')?'danger' : 'success';
    
    }
    return(

        <div className={css}>
        {props.message.text}</div>
    )

}