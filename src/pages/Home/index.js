import { ContainerPage, TitlePage } from "../../components/Main";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import React from 'react';

const Page = () =>
{
    return (

        <ContainerPage>
            <TitlePage>
                <BeenhereIcon/>Seja bem-vindo
            </TitlePage>
        </ContainerPage>
    );
}

export default Page;