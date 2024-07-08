import { FC } from 'react'
import { usePermissionContext } from "../../hooks/context/usePermissionContext";
import { Button } from 'antd';

interface IProps {
    entity?: any,
    entityId: any,
    actionItem?: any,
    component?: any,
    onCheckIsShowAction?: (actionItemInfo: string, recordItemInfo: any) => boolean,
    handleCallbackFunc?: (event: any, action: string, recordId?: any, data?: any) => void,
}

const ItemAction: FC<IProps> = props => {
    const { entity, entityId, actionItem, component: Component, handleCallbackFunc, onCheckIsShowAction } = props;
    const { isPermissionLoaded, hasPermission } = usePermissionContext();

    if (isPermissionLoaded && hasPermission(actionItem.permission)) {
        if (onCheckIsShowAction) {
            if (onCheckIsShowAction(actionItem, entity)) {
                return (
                    <Component entityId={entityId} actionItem={actionItem} handleCallbackFunc={handleCallbackFunc}>
                        <Button className={actionItem.className} type="text" icon={actionItem.icon}></Button>
                        {/* {actionItem.title} */}
                    </Component>
                );
            }
        } else {
            return (
                <Component entityId={entityId} actionItem={actionItem} handleCallbackFunc={handleCallbackFunc}>
                    <Button className={actionItem.className} type="text" icon={actionItem.icon}></Button>
                </Component>
            );
        }
    }

    return <></>

}

export default ItemAction;
