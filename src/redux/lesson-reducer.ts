let initialState = {
    currentLessonId: 0,
}

const LessonReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_LESSON':
            return action.id;
        default:
            return initialState;
    }
}

export const updateCurrentLessonAC = (id: number) => ({type: 'UPDATE_CURRENT_LESSON', id: id});

export default LessonReducer;