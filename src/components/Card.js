import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import { Badge } from 'reactstrap';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const [show,setShow]=useState(false)
    console.log("final",taskObj)

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    
    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondary, "border-radius": "5px"}}>{taskObj.Name}</span>
                <div className = "mt-3"><span style={{"background-color": colors[index%5].secondary, "border-radius": "5px"}} >Description</span> : {taskObj.Description}</div>
                <div className = "mt-3"><span style={{"background-color": colors[index%5].secondary, "border-radius": "5px"}}>Due Date </span>: {taskObj.DueDate}</div>
                <div className = "mt-3">{ show? <Badge color="secondary">completed</Badge> : <Badge color="success">In Progress</Badge> }</div>
                
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class="fa fa-check mr-3"style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {()=>setShow(!show)}></i>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>      
    );
};

export default Card;