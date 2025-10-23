// src/components/Providers.tsx

"use client";

import {
  BorderStyle,
  ChartMode,
  ChartVariant,
  DataThemeProvider,
  IconProvider,
  LayoutProvider,
  NeutralColor,
  ScalingSize,
  Schemes,
  SolidStyle,
  SolidType,
  SurfaceStyle,
  ThemeProvider,
  ToastProvider,
  TransitionStyle,
} from "@once-ui-system/core";

// Import UI components and resources needed for the visual layout
import { Background, Column, Flex } from "@/once-ui/components"; 
import { Footer, Header, RouteGuard } from "@/components"; 
import { opacity, SpacingToken } from "@/once-ui/types"; 

// Import resources required for the providers and the background component
import { style, dataStyle, effects } from "../resources"; 
import { iconLibrary } from "../resources/icons";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider
        brand={style.brand as Schemes}
        accent={style.accent as Schemes}
        neutral={style.neutral as NeutralColor}
        solid={style.solid as SolidType}
        solidStyle={style.solidStyle as SolidStyle}
        border={style.border as BorderStyle}
        surface={style.surface as SurfaceStyle}
        transition={style.transition as TransitionStyle}
        scaling={style.scaling as ScalingSize}
      >
        <DataThemeProvider
          variant={dataStyle.variant as ChartVariant}
          mode={dataStyle.mode as ChartMode}
          height={dataStyle.height}
          axis={{
            stroke: dataStyle.axis.stroke,
          }}
          tick={{
            fill: dataStyle.tick.fill,
            fontSize: dataStyle.tick.fontSize,
            line: dataStyle.tick.line,
          }}
        >
          <ToastProvider>
            <IconProvider icons={iconLibrary}>
              
              <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
                <Background
                  position="fixed"
                  mask={{
                    x: effects.mask.x,
                    y: effects.mask.y,
                    radius: effects.mask.radius,
                    cursor: effects.mask.cursor
                  }}
                  gradient={{
                    display: effects.gradient.display,
                    opacity: effects.gradient.opacity as opacity,
                    x: effects.gradient.x,
                    y: effects.gradient.y,
                    width: effects.gradient.width,
                    height: effects.gradient.height,
                    tilt: effects.gradient.tilt,
                    colorStart: effects.gradient.colorStart,
                    colorEnd: effects.gradient.colorEnd,
                  }}
                  dots={{
                    display: effects.dots.display,
                    opacity: effects.dots.opacity as opacity,
                    size: effects.dots.size as SpacingToken,
                    color: effects.dots.color,
                  }}
                  grid={{
                    display: effects.grid.display,
                    opacity: effects.grid.opacity as opacity,
                    color: effects.grid.color,
                    width: effects.grid.width,
                    height: effects.grid.height,
                  }}
                  lines={{
                    display: effects.lines.display,
                    opacity: effects.lines.opacity as opacity,
                    size: effects.lines.size as SpacingToken,
                    thickness: effects.lines.thickness,
                    angle: effects.lines.angle,
                    color: effects.lines.color,
                  }}
                />
                <Flex fillWidth minHeight="16" hide="s"></Flex>
                <Header />
                <Flex
                  zIndex={0}
                  fillWidth
                  paddingY="l"
                  paddingX="l"
                  horizontal="center"
                  flex={1}
                >
                  <Flex horizontal="center" fillWidth minHeight="0">
                    <RouteGuard>{children}</RouteGuard>
                  </Flex>
                </Flex>
                <Footer />
              </Column>

            </IconProvider>
          </ToastProvider>
        </DataThemeProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}