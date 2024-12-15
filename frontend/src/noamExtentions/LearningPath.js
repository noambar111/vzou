import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector } from "../store/hooks";
import { selectAuthentication } from "../store/reducers/auth-reducer";

const LearningPath = () => {
    const [learningPath, setLearningPath] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const authSlice = useAppSelector(selectAuthentication);
    const userId = authSlice.user?.id; 
    useEffect(() => {
        const fetchLearningPath = async () => {
            try {
                if (!userId) throw new Error('User ID is missing');
                const response = await axios.get(`http://localhost:3001/api/learning-path/${userId}`);
                setLearningPath(response.data.learningPath);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching learning path:', err);
                setError('Failed to load learning path');
                setLoading(false);
            }
        };

        fetchLearningPath();
    }, [userId]);

    if (loading) return <p>Loading learning path...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Your Personalized Learning Path</h2>
            {learningPath ? (
                <ul>
                    {Object.entries(learningPath).map(([key, value]) => (
                        <li key={key}>
                            Question {key}: {value.status}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No learning path available.</p>
            )}
        </div>
    );
};

export default LearningPath;
