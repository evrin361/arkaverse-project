import { Shell } from "../../src/design-system/shell/Shell";
import { Button } from "../../src/design-system/primitives/Button";
import { Card } from "../../src/design-system/primitives/Card";
import { Input } from "../../src/design-system/primitives/Input";

export default function Home() {
  return (
    <Shell>
      <div className="max-w-xl mx-auto p-10 space-y-6">

        <h1 className="text-4xl font-bold">
          ARKAVERSE Design System Test
        </h1>

        <Card>
          <div className="space-y-4">

            <Input placeholder="Test Input" />

            <Button>
              Test Button
            </Button>

          </div>
        </Card>

      </div>
    </Shell>
  );
}
  /*
 "use client";

import { useState } from "react";

import { Shell } from "@/src/design-system/shell/Shell";
import { Button } from "@/src/design-system/primitives/Button";
import { Card } from "@/src/design-system/primitives/Card";
import { Input } from "@/src/design-system/primitives/Input";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <Shell>
      <div className="max-w-xl mx-auto p-10 space-y-6">
        <h1 className="text-4xl font-bold">
          ARKAVERSE Interaction Test
        </h1>

        <Card>
          <div className="space-y-4">
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type something..."
            />

            <div>
              Current Value: {value}
            </div>

            <Button
              onClick={() => alert("Button Works")}
            >
              Click Me
            </Button>
          </div>
        </Card>
      </div>
    </Shell>
  );
} */