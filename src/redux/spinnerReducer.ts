let initialState = {
    isSpinnerActive: false,
}

export enum SpinnerStatusEnum {
    active = 'ACTIVE',
    inactive = 'NOT_ACTIVE',
}

const SpinnerReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SpinnerStatusEnum.active:
            return true;
        case SpinnerStatusEnum.inactive:
            return false;
        default:
            return false;
    }
}

export const showSpinnerActionCreator = () => ({type: SpinnerStatusEnum.active});
export const hideSpinnerActionCreator = () => ({type: SpinnerStatusEnum.inactive});


export default SpinnerReducer;