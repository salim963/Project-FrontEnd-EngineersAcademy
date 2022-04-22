import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCourses } from '../../api/coursesApi';

export default function CourseList() {

    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const promise = getCourses();
        promise.then(response => {
            const courses = response.data;
            setCourses(courses);
        });
    }, []);

    const addNewCourse = () => {
        navigate('/courses/new')
    };

    return (
        <div class="p-2">
            <div class="d-flex justify-content-between">
                <h2>Courses</h2>
                <button type="button" class="btn btn-primary" onClick={addNewCourse}>New</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                                    </td>
                                    <td>{course.description}</td>
                                    <td>
                                        <Link to={`/courses/${course.id}/update`}>Update</Link>
                                        <Link style={{ marginLeft: 10 }} to={`/courses/${course.id}/delete`}>Delete</Link>
                                    </td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
