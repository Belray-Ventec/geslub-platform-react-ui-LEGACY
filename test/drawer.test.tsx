import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  Drawer,
  DrawerItem,
  DrawerSubItem,
} from '../src/components/molecules/drawer';
import { Icon } from '../src/components/atoms/icon';

describe('Testing Drawer', () => {
  const setup = () => {
    const SUB_MENU = [
      {
        label: 'Home',
        icon: <Icon icon="Home" size={25} color="#fff" />,
        to: '/',
      },
      {
        label: 'Lubricantes Especiales',
        icon: <Icon icon="Document" size={25} color="#fff" />,
        sub: [
          {
            label: 'Información técnica',
            to: '/informacion-tecnica',
            icon: <Icon icon="Document" size={25} color="#fff" />,
          },
          {
            label: 'Certificados',
            to: '/certificados',
          },
          {
            label: 'Marketing',
            to: '/marketing',
          },
          {
            label: 'Testimoniales',
            to: '/testimoniales',
          },
          {
            label: 'OEM',
            to: '/oem',
          },
        ],
      },
    ];

    render(
      <Drawer
        title="Geslub Platform"
        isOpen={true}
        onStateChange={() => console.log('onStateChange')}
      >
        {SUB_MENU.map((item) =>
          !item.sub ? (
            <DrawerItem
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              isOpen={true}
              key={item.label}
              icon={item.icon}
            >
              {item.label}
            </DrawerItem>
          ) : (
            <DrawerSubItem
              onStateChange={() => console.log('onStateChange subItem')}
              title={item.label}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              isOpen={true}
              key={item.label}
              icon={item.icon}
            >
              {item.sub.map((subItem) => (
                <DrawerItem
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  isOpen={true}
                  key={subItem.label}
                  icon={subItem.icon}
                >
                  {subItem.label}
                </DrawerItem>
              ))}
            </DrawerSubItem>
          )
        )}
      </Drawer>
    );
  };

  test('Debe mostrar el drawer', async () => {
    setup();
    const drawer = screen.getAllByRole('navigation');
    drawer.map((element) => expect(element).toBeInTheDocument());
  });

  test('Debe mostrar el titulo del drawer', async () => {
    setup();
    const showDrawerButton = screen.getByLabelText('show drawer');
    fireEvent.click(showDrawerButton);
    const title = screen.getByText('Geslub Platform');
    expect(title).toBeInTheDocument();
  });

  test('Debe mostrar el contenido del drawer', async () => {
    setup();
    const showDrawerButton = screen.getByLabelText('show drawer');
    fireEvent.click(showDrawerButton);
    const content = screen.getByText('Lubricantes Especiales');
    expect(content).toBeInTheDocument();
  });
});
