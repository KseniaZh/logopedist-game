import React, { useState } from 'react';

import { connect, useDispatch, useSelector } from "react-redux";

import FlagsLevelsСompleted from './FlagsLevelsСompleted';
import SelectingLevelBlock from '../../UserInterface/SelectingLevelBlock';
import LevelBlock from '../../components/Automation/LevelBlock';


function AutomationButtonsBlocks(props) {

    const dispatch = useDispatch();

    const namesLevelBlock = [
        'LevelBlock_1',
        'LevelBlock_2',
        'LevelBlock_3',
        'LevelBlock_4',
        'LevelBlock_5',
        'LevelBlock_6'
    ];

    const [numberLevelBlock, setNumberLevelBlock] = useState(0);

    const hendlerLevelEnd = () => {

    }
    const hendlerSelectLevelBlock = (data) => {
        setNumberLevelBlock(data);
    }
    return (
        <div className="automation-buttons-blocks">

            <div>
                Тип буквы {props.match.params.id} буква {props.match.params.name}

                <SelectingLevelBlock
                    namesLevelBlock={namesLevelBlock}
                    onclick={hendlerSelectLevelBlock}
                />

            </div>

            <LevelBlock
                letterAutomation={props.match.params.name}
                numberLevelBlock={numberLevelBlock}
            />

            <FlagsLevelsСompleted />
               
        </div>
        
     )
}

export default connect()(AutomationButtonsBlocks)
