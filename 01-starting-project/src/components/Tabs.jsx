export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // passing cutom component types
    // const ButtonsContainer = buttonsContainer; //this varibale needs to be upper case for custom component types to work
    return (<>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
    );
}