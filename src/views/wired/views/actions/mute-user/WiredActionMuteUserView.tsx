import Slider from 'rc-slider/lib/Slider';
import { FC, useCallback, useEffect, useState } from 'react';
import { LocalizeText } from '../../../../../utils/LocalizeText';
import { useWiredContext } from '../../../context/WiredContext';
import { WiredFurniType } from '../../../WiredView.types';
import { WiredActionBaseView } from '../base/WiredActionBaseView';

export const WiredActionMuteUserView: FC<{}> = props =>
{
    const [ time, setTime ] = useState(-1);
    const [ message, setMessage ] = useState('');
    const { trigger = null, setIntParams = null, setStringParam = null } = useWiredContext();

    useEffect(() =>
    {
        setTime((trigger.intData.length > 0) ? trigger.intData[0] : 0);
        setMessage(trigger.stringData);
    }, [ trigger ]);

    const save = useCallback(() =>
    {
        setIntParams([ time ]);
        setStringParam(message);
    }, [ time, message, setIntParams, setStringParam ]);

    return (
        <WiredActionBaseView requiresFurni={ WiredFurniType.STUFF_SELECTION_OPTION_NONE } save={ save }>
            <div className="form-group mb-2">
                <label className="fw-bold">{ LocalizeText('wiredfurni.params.length.minutes', ['minutes'], [ time.toString() ]) }</label>
                <Slider 
                    value={ time }
                    min={ 1 }
                    max={ 10 }
                    onChange={ event => setTime(event) } />
            </div>
            <div className="form-group">
                <label className="fw-bold">{ LocalizeText('wiredfurni.params.message') }</label>
                <input type="text" className="form-control form-control-sm" value={ message } onChange={ event => setMessage(event.target.value) } />
            </div>
        </WiredActionBaseView>
    );
}
