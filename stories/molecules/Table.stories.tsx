import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { data2 } from '../../src/utils/data';
import { Table } from '../../src/components/molecules/table';

export default {
  title: 'Molecules/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Tabla Responsiva con Paginación',
      },
    },
  },
  argTypes: {
    themeColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: data2,
  columns: [
    { label: 'Id', getValue: (item) => item.id },
    { label: 'Nombre', getValue: (item) => item.first_name },
    { label: 'Apellido', getValue: (item) => item.last_name },
    { label: 'Email', getValue: (item) => <a href="/#">{item.email}</a> },
    { label: 'Genero', getValue: (item) => item.gender },
    { label: 'Ip address', getValue: (item) => item.ip_address },
  ],

  getRowKey: (item): string | number => item.id,
  showPages: true,
  itemsPerPage: 5,
  actions: [{ label: 'Editar', callback: (item) => console.log(item) }],
  showSee: true,
  showDownload: true,
  showInfo: true,
  showDisabled: true,
  showDisabledInAdminOptions: false,
  showAdminOptions: true,
  getRowIsEnabled: (item) => item.enabled,
  onDelete: (data) => {
    console.log(data);
  },
  onEdit: (data) => {
    console.log(data);
  },
  onDeleteItem: (data) => {
    console.log(data);
  },
  onSee: (data) => {
    console.log(data);
  },
  onDownload: (data) => {
    console.log(data);
  },
  onInfo: (data) => {
    console.log(data);
  },
  onShare: (data) => {
    console.log(data);
  },
  onDisabled: (item) =>
    console.log(`Registro deshabilitado: ${JSON.stringify(item)}`),
  onEnabled: (item) =>
    console.log(`Registro habilitado: ${JSON.stringify(item)}`),
  showHeaderButtons: true,
  share: (data) => {
    console.log(data);
  },
  add: () => {
    console.log('add');
  },
  isLoading: true,
};
