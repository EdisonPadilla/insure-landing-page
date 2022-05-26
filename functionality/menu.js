"use strict";

const d = document;

const $menu_btn = d.querySelector(".ham-btn");
const $menu = d.querySelector(".nav-menu");
const $bars_icon = d.querySelector(".ham-btn .bars-icon");
const $x_icon = d.querySelector(".ham-btn .x-icon");

$menu_btn.addEventListener("click", () => {
  $menu.classList.toggle("show");
  $bars_icon.classList.toggle("active");
  $x_icon.classList.toggle("active");
});
