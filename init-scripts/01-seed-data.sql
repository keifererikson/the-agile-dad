CREATE TABLE exercise_types (
    id SERIAL PRIMARY KEY,
    exercise_name VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(50) NOT NULL
);

INSERT INTO exercise_types (exercise_name, category) VALUES
('Walking', 'Cardio'),
('Running', 'Cardio'),
('Cycling', 'Cardio'),
('Rowing', 'Cardio'),
('Bicep Curl Machine', 'Weights'),
('Tricep Extension Machine', 'Weights'),
('Chest Press Machine', 'Weights'),
('Leg Press', 'Weights'),
('Seated Row', 'Weights'),
('Shoulder Press Machine', 'Weights'),
('Lat Pulldown', 'Weights');
