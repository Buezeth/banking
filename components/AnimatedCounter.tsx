"use client";
import { formatAmount } from "@/lib/utils";
import { Fragment } from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <Fragment>
      <CountUp
        end={amount}
        prefix="$"
        decimal=","
        duration={2.75}
        decimals={2}
      />
    </Fragment>
  );
};

export default AnimatedCounter;
