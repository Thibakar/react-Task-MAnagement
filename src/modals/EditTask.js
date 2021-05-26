import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setdueDate] = useState('');
    const handleTitle = (e) => {
        const { value } = e.target
        setTaskName(value)
    }
    const handleDescription = (e) => {
        const { value } = e.target
        setDescription(value)
    }
    const handleDate = (e) => {
        const { value } = e.target
        setdueDate(value)
    }

    useEffect(() => {
        setTaskName(taskObj.taskName)
        setDescription(taskObj.Description)
        setdueDate(taskObj.dueDate)
    }, [taskObj.Description, taskObj.taskName, taskObj.dueDate])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['DueDate'] = dueDate
        updateTask(tempObj)
        console.log(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Task Name</label>
                    <input type="text" className="form-control" value={taskName} onChange={handleTitle} name="taskName" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" value={description} onChange={handleDescription} name="description"></textarea>
                </div>
                <form action="/action_page.php">
                    <input type="date" id="birthday" value={dueDate} onChange={handleDate} name="dueDate" />
                </form>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup;