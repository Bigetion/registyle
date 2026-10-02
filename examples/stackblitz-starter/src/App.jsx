import { useState } from 'react';
import { Minus, Plus, RotateCcw, Github, Package } from 'lucide-react';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Card, CardHeader, CardBody, CardFooter } from './components/Card';
import { Input } from './components/Input';

export default function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');

  return (
    <div style={{ fontFamily: 'inherit', minHeight: '100vh', background: '#f9fafb', padding: '32px 16px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>registyle</h1>
            <Badge variant="primary">v2.1.0</Badge>
          </div>
          <p style={{ color: '#6b7280', margin: 0, fontSize: '15px' }}>
            Write Tailwind utilities once. Use semantic class names everywhere.
          </p>
          <p style={{ color: '#9ca3af', margin: '8px 0 0', fontSize: '13px' }}>
            💡 Open <strong>DevTools → Inspector</strong> and click any button below.
            You'll see <code style={{ background: '#f3f4f6', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>class="btn btn-primary btn-md"</code> — not utility strings.
          </p>
        </div>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Button variants</span>
            <Badge variant="default">button.js</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </CardBody>
          <CardFooter>
            <code style={{ fontSize: '12px', color: '#6b7280' }}>
              {'<Button variant="primary" size="md">Primary</Button>'}
            </code>
          </CardFooter>
        </Card>

        {/* Counter — shows cx() in action */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>cx() for conditional classes</span>
            <Badge variant="default">registyle</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Button variant="outline" size="sm" onClick={() => setCount(c => c - 1)}>
                <Minus size={14} />
              </Button>
              <span style={{ fontSize: '24px', fontWeight: 700, minWidth: '40px', textAlign: 'center' }}>{count}</span>
              <Button variant="outline" size="sm" onClick={() => setCount(c => c + 1)}>
                <Plus size={14} />
              </Button>
              <Button
                variant={count === 0 ? 'ghost' : count > 0 ? 'primary' : 'danger'}
                size="sm"
                onClick={() => setCount(0)}
              >
                <RotateCcw size={14} /> Reset
              </Button>
            </div>
            <p style={{ margin: '12px 0 0', fontSize: '13px', color: '#9ca3af' }}>
              Reset button variant changes based on count: ghost → primary (positive) → danger (negative)
            </p>
          </CardBody>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Badge variants</span>
            <Badge variant="default">badge.js</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
          </CardBody>
          <CardFooter>
            <code style={{ fontSize: '12px', color: '#6b7280' }}>
              {'<Badge variant="success">Success</Badge>'}
            </code>
          </CardFooter>
        </Card>

        {/* Input */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Input field</span>
            <Badge variant="default">input.js</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
                hint="We'll never share your email."
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                label="Username"
                defaultValue="john_doe"
                error="Username is already taken."
              />
            </div>
          </CardBody>
        </Card>

        {/* How it works */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>How it works</span>
          </CardHeader>
          <CardBody>
            <ol style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>
              <li>
                Define classes in <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>src/registyles/button.js</code> using <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>register()</code> with Tailwind utilities
              </li>
              <li>
                The Vite plugin picks up <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>src/registyles/index.js</code>, compiles everything through Tailwind v4, and serves it as <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>virtual:registyle.css</code>
              </li>
              <li>
                Your components use clean class names like <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>btn btn-primary btn-md</code> — no utility strings in JSX
              </li>
              <li>
                Result: <strong>~7 KB gzip</strong> CSS for a full design system, zero JS runtime overhead
              </li>
            </ol>
          </CardBody>
          <CardFooter>
            <a
              href="https://github.com/Bigetion/registyle"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/registyle"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}
            >
              <Package size={14} /> npm
            </a>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
