import { FC } from 'react';
import { InventoryFurnitureItemView } from '../item/InventoryFurnitureItemView';
import { InventoryFurnitureResultsViewProps } from './InventoryFurnitureResultsView.types';

export const InventoryFurnitureResultsView: FC<InventoryFurnitureResultsViewProps> = props =>
{
    const { groupItems = [] } = props;

    return (
        <div className="row row-cols-5 g-0 item-container">
            { groupItems && groupItems.length && groupItems.map((item, index) =>
                {
                    return <InventoryFurnitureItemView key={ index } groupItem={ item } />
                })
            }
        </div>
    );
}