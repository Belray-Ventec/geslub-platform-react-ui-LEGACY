import Table from '../src/components/table';
import React from 'react';
import { ComponentMeta, ComponentStory} from '@storybook/react';
import TagList from '../src/components/tagList/index';
import { Product, productData } from '../src/data/index';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table  {...args} />;

export const Default = Template.bind({});


Default.args = {
    
    data: productData,
    columns: [
        { label: "Id", key: "id" },
        { label: "Nombre", key: "name" },
        { label: "Precio", key: "price" },
        { label: "Comprar", key: "link" },
        { label: "Etiquetas", key: "tag"}
      ],
      getRowKey: (item: Product): string | number => item.id,
      renderCell: (key, value): string | JSX.Element => {
        if (key === "link")
          return (
            <a
              href={String(value)}
              rel="noopener noreferrer"
              target="_blank"
              download
            >
              Comprar
            </a>
          );
        else if(key === 'tag')
         return (
            <TagList data={value} />
         )
        else return String(value);
      },
};
