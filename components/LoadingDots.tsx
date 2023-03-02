import React from "react";
import styles from "../styles/loading-dots.module.css";

const LoadingDots = ({
  color = "#000",
  style,
}: {
  color: string;
  style?: string;
}) => {
  const loadingSty