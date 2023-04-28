import React, { useState } from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Link from "next/link";
import {
  Accordion,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Checkbox,
  Drawer,
  Indicator,
  Input,
  Modal,
  MultiSelect,
  RangeSlider,
  Select,
  Space,
  Stepper,
  Tabs,
  Text,
  TextInput,
  Textarea,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconArrowDown, IconFilter, IconTrolley } from "@tabler/icons";
import { useDisclosure } from "@mantine/hooks";
import moment from "moment";

// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

const originalColors = ["white", "white", "white"];

export default function Test() {
  const [sectionsColor, setSectioncolors] = useState([...originalColors]);
  const [fullpages, setFullPages] = useState([
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
    {
      id: "10",
    },
    {
      id: "11",
    },
    {
      id: "12",
    },
  ]);
  const [currentSection, setCurrentSection] = useState(1);

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
    setCurrentSection(destination.index + 1);
  };

  const handleChangeColors = () => {
    const newColors =
      sectionsColor[0] === "yellow"
        ? [...originalColors]
        : ["yellow", "blue", "white"];
    setSectioncolors([...newColors]);
  };

  const handleAddSection = () => {
    setFullPages((prevFullPages) => {
      const newPages = [...prevFullPages];
      newPages.push({
        text: `section ${length + 1}`,
        id: Math.random(),
      });
      return newPages;
    });
  };

  const handleRemoveSection = () => {
    setFullPages((prevFullPages) => {
      const newPages = [...prevFullPages];
      newPages.pop();

      return newPages;
    });
  };

  if (!fullpages.length) {
    return null;
  }

  const Menu = () => {
    const [openedCart, setOpenedCart] = useState(false);
    const [openedMenu, setOpenedMenu] = useState(false);
    const [openedFilter, setOpenedFilter] = useState(false);

    const [active, setActive] = useState(1);
    const [editChecked, setEditChecked] = useState(false);

    const cartItems = [
      {
        image: "/gilbeys-gin.webp",
        price: 1500,
        packaging: "750ml",
        name: "Gilbey's Gin",
        quantity: 1,
      },
      {
        image: "/gilbeys-gin.webp",
        price: 1500,
        packaging: "750ml",
        name: "Gilbey's Gin",
        quantity: 1,
      },
      {
        image: "/gilbeys-gin.webp",
        price: 1500,
        packaging: "750ml",
        name: "Gilbey's Gin",
        quantity: 1,
      },
    ];

    function valueLabelFormat(value) {
      return `Ksh. ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    const CartItem = ({ item }) => {
      return (
        <div className="flex justify-between w-full p-3 border border-b-[0.5px] border-b-gray-200">
          <div className="flex space-x-3">
            <img src={item.image} className="w-[65px] h-[65px]" />
            <div className="space-y-1">
              <p className="font-medium text-black">{item.name}</p>
              <Text c="dimmed" fz={"sm"}>
                Ksh.{" "}
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
              <Badge color="dark" variant="filled" size="sm">
                {item.packaging}
              </Badge>
            </div>
          </div>
          <div className="space-y-2">
            <Select
              placeholder="Qty"
              value={item.quantity}
              w={100}
              variant="filled"
              size="xs"
              data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            />
            <Button uppercase size="xs" color="yellow" fullWidth>
              <p className="uppercase text-black font-normal tracking-tight">
                remove
              </p>
            </Button>
          </div>
        </div>
      );
    };

    const OrderItem = ({ item }) => {
      return (
        <Accordion.Item value={item.name}>
          <Accordion.Control>
            <div className="flex justify-between w-full">
              <div className="flex space-x-3">
                <img src={item.image} className="w-[65px] h-[65px]" />
                <div className="space-y-1">
                  <p className="font-medium text-black">{item.name}</p>
                  <Text c="dimmed" fz={"sm"}>
                    Ksh.{" "}
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Text>
                  <div className="flex space-x-2">
                    <Badge color="dark" variant="filled" size="sm">
                      {item.packaging}
                    </Badge>
                    <Text c="dimmed" fz={"sm"}>
                      x 3
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Control>
          <Accordion.Panel>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Text c="dimmed" fz={"sm"}>
                  Ordered
                </Text>
                <Text c="dark" fz={"sm"}>
                  {moment(new Date()).startOf("hour").fromNow()}
                </Text>
              </div>
              <div className="flex justify-between">
                <Text c="dimmed" fz={"sm"}>
                  Delivered
                </Text>
                <Text c="dark" fz={"sm"}>
                  {moment(new Date()).startOf("hour").fromNow()}
                </Text>
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      );
    };

    const Cart = () => {
      return (
        <>
          <div className="w-[calc(100vw-85px)] border my-3">
            {cartItems.map((cartItem, i) => (
              <CartItem key={i} item={cartItem} />
            ))}
          </div>
          <br />
        </>
      );
    };

    const Payment = () => {
      return (
        <div className="w-[calc(100vw-85px)]  my-3 p-3">
          <div className="flex justify-between mb-1">
            <Text c="dimmed">Products' cost</Text>
            <Text c="dark">
              Ksh.{" "}
              {Number(7500)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </div>
          <div className="flex justify-between">
            <Text c="dimmed">Delivery</Text>
            <Text c="dark">
              Ksh.{" "}
              {Number(50)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex justify-between">
            <Text c="dimmed">Grand Total</Text>
            <Text c="dark" fz="lg" className="tracking-tight">
              Ksh.{" "}
              {Number(7550)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </div>
          <br />
          <Button uppercase fullWidth color="dark">
            <p className="uppercase text-white font-normal tracking-tight mr-2">
              pay now with
            </p>{" "}
            {"  "} <img src="/mpesa.png" />
          </Button>
        </div>
      );
    };

    const Delivery = () => {
      const [checked, setChecked] = useState(false);
      return (
        <div className="w-[calc(100vw-85px)]  my-3 p-3 space-y-3">
          <Select
            label="Address"
            placeholder="Pick one"
            variant="filled"
            color="yellow"
            data={["Gate A", "Gate B", "Gate C", "Juja stage"]}
          />
          <Textarea
            variant="filled"
            placeholder="ex. Jacaranda Apartments"
            label="Apartment"
          />
          <Checkbox
            label="Provide exact location"
            color="yellow"
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
          />
        </div>
      );
    };

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: "100%",
          background: "white",
        }}
      >
        <div className="flex p-8 pb-4 w-full justify-between ">
          <div className="space-y-2 p-1" onClick={() => setOpenedMenu(true)}>
            <div className="h-[2px] w-[25px] rounded-sm bg-gray-700" />
            <div className="h-[2px] w-[15px] rounded-sm bg-gray-700" />
          </div>
          <Drawer
            opened={openedMenu}
            onClose={() => setOpenedMenu(false)}
            title={
              <h1 className="text-[1.3rem] font-bold py-6 px-1">Account</h1>
            }
            position="left"
            size="75%"
          >
            <Avatar
              src={null}
              alt="Steve Kinuthia"
              color="yellow"
              size={"112px"}
              className="mx-auto"
            >
              SK
            </Avatar>
            <br />
            <Tabs color="yellow" defaultValue="profile">
              <Tabs.List>
                <Tabs.Tab value="profile">Profile</Tabs.Tab>
                <Tabs.Tab value="orders">Orders</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="profile" pt="xs">
                <div className="space-y-3 mt-3 px-2">
                  <Checkbox
                    style={{ float: "right" }}
                    label="Edit mode"
                    size="sm"
                    color="yellow"
                    checked={editChecked}
                    onChange={(event) =>
                      setEditChecked(event.currentTarget.checked)
                    }
                  />
                  <Space h={15} />
                  <TextInput
                    placeholder="Your name"
                    label="Full name"
                    variant="filled"
                    withAsterisk
                  />
                  <TextInput
                    placeholder="Your phone number"
                    label="Phone number"
                    variant="filled"
                    withAsterisk
                  />
                  <Select
                    label="Default address"
                    placeholder="Pick one"
                    variant="filled"
                    color="yellow"
                    data={["Gate A", "Gate B", "Gate C", "Juja stage"]}
                  />
                  <Textarea
                    variant="filled"
                    placeholder="ex. Jacaranda Apartments"
                    label="Landmark description"
                  />
                </div>
                <Space h={50} />
                <Button uppercase size="xs" color="yellow" fullWidth>
                  <p className="uppercase text-black font-normal tracking-tight">
                    save profile
                  </p>
                </Button>
              </Tabs.Panel>

              <Tabs.Panel value="orders" pt="xs">
                <div className="my-3">
                  <Accordion
                    styles={{
                      item: {
                        // styles added to all items
                        backgroundColor: "#fff",
                        margin: 0,
                        padding: 0,
                      },
                    }}
                  >
                    {cartItems.map((orderItem, i) => (
                      <OrderItem key={i} item={orderItem} />
                    ))}
                  </Accordion>
                </div>
              </Tabs.Panel>
            </Tabs>
          </Drawer>

          <img
            src="/logo.svg"
            className="w-1/2 mt-[-20px]"
            style={{ zIndex: 100 }}
          />

          <Indicator color="yellow" inline label="9" size={16} offset={-4}>
            <UnstyledButton onClick={() => setOpenedCart(true)}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
              </svg>
            </UnstyledButton>
          </Indicator>

          <Drawer
            opened={openedCart}
            onClose={() => setOpenedCart(false)}
            title={<h1 className="text-[1.3rem] font-bold py-6 px-1">Cart</h1>}
            size="100%"
            position="right"
          >
            <Stepper
              color="yellow"
              active={active}
              onStepClick={setActive}
              orientation="vertical"
            >
              <Stepper.Step label="Order confirmation" description={<Cart />} />
              <Stepper.Step label="Delivery" description={<Delivery />} />
              <Stepper.Step label="Payment" description={<Payment />} />
            </Stepper>
          </Drawer>
        </div>
        <div className="px-8 w-full">
          <Input
            size="md"
            className=""
            variant="filled"
            placeholder="Search"
            rightSection={
              <Button
                p={0}
                w={36}
                h={36}
                color="dark"
                onClick={() => setOpenedFilter(true)}
              >
                <IconFilter size={16} />
              </Button>
            }
          />
          <Modal
            opened={openedFilter}
            onClose={() => setOpenedFilter(false)}
            title={
              <h1 className="text-[1.3rem] font-bold py-3 px-1">Filter</h1>
            }
            centered
          >
            <div className="space-y-4">
              <MultiSelect
                variant="filled"
                data={[
                  "gin",
                  "vodka",
                  "whiskey",
                  "brandy",
                  "rum",
                  "beer",
                  "wine",
                  "juice",
                  "soda",
                ]}
                label="Type"
                placeholder="ex Gin , Vodka"
                searchable
                nothingFound="Nothing found"
                dropdownPosition="bottom"
              />
              <MultiSelect
                variant="filled"
                data={["250ml", "500ml", "750ml", "1000ml"]}
                label="Packaging"
                placeholder="ex 250ml , 500ml"
                nothingFound="Nothing found"
                dropdownPosition="bottom"
              />

              <div className="space-y-3">
                <label className="text-[0.9rem] font-medium">Price range</label>

                <RangeSlider
                  color="dark"
                  min={0}
                  max={5000}
                  defaultValue={[300, 5000]}
                  label={valueLabelFormat}
                  styles={(theme) => ({
                    track: {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[3]
                          : theme.colors.dark[1],
                    },
                    mark: {
                      width: rem(6),
                      height: rem(6),
                      borderRadius: rem(6),
                      transform: `translateX(-${rem(3)}) translateY(-${rem(
                        2
                      )})`,
                      borderColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[3]
                          : theme.colors.dark[1],
                    },
                    markFilled: {
                      borderColor: theme.colors.dark[6],
                      height: 3,
                    },
                    markLabel: {
                      fontSize: theme.fontSizes.xs,
                      marginBottom: rem(5),
                      marginTop: 0,
                    },
                    thumb: {
                      height: rem(16),
                      width: rem(16),
                      backgroundColor: theme.white,
                      borderWidth: rem(1),
                      boxShadow: theme.shadows.sm,
                    },
                  })}
                />
              </div>
            </div>
            <div className="h-[40px] w-full" />
            <Button color="yellow" fullWidth>
              <p className="uppercase text-black font-normal tracking-tight">
                Apply filter
              </p>
            </Button>
          </Modal>
        </div>
        <div className="px-8 w-full flex flex-row-reverse pt-3 float-right">
          <Text c="dimmed">
            <p className="tracking-tighter text-black inline text-[1.5rem] font-bold">
              {currentSection}
            </p>
            /{fullpages.length}
          </Text>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Menu />
      <div style={{ zIndex: 80 }}>
        <ReactFullpage
          style={{ zIndex: 999 }}
          navigation={false}
          onLeave={onLeave}
          sectionsColor={sectionsColor}
          render={(comp) => (
            <>
              <ReactFullpage.Wrapper>
                {fullpages.map(({ id }) => (
                  <div key={id} className="section">
                    <div className="h-[70vh] mt-[18vh] w-[95%] mx-auto relative bg-transparent">
                      <img
                        src="/gilbeys-gin.webp"
                        className="w-[85%] mx-auto"
                      />
                      <div className="absolute bottom-8 mx-6 flex bg-transparent">
                        <div className="space-y-1 w-3/4">
                          <div className="mb-1">
                            <h1 className="text-[1.8rem] font-bold px-1">
                              Gilbey's Gin
                            </h1>
                            <Badge color="dark" variant="filled">
                              750ml
                            </Badge>
                          </div>
                          <Text
                            c="dark"
                            opacity={0.5}
                            className="font-light"
                            fz={"sm"}
                          >
                            Enjoy a nice refreshing drink for your party
                          </Text>
                          <h1 className="text-[1.2rem] tracking-tight font-bold py-3 px-1">
                            Ksh.{" "}
                            {Number(1500)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h1>
                          <Button color="dark" uppercase fullWidth>
                            add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            </>
          )}
        />
      </div>
    </div>
  );
}
