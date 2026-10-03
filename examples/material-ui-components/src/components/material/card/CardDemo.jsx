import { useState } from 'react';
import { ArrowUpRight, Bookmark, Check, Heart, Image, MoreHorizontal, Users } from 'lucide-react';
import { cx } from 'registyle';

function ProjectCard() {
  return (
    <article className="mui-card project-card">
      <div className="card-project-top">
        <span className="card-project-icon"><Image size={16} aria-hidden="true" /></span>
        <button className="card-more-button" type="button" aria-label="More project actions">
          <MoreHorizontal size={17} aria-hidden="true" />
        </button>
      </div>
      <div className="card-copy">
        <span className="card-eyebrow">PRODUCT DESIGN</span>
        <h3>Website refresh</h3>
        <p>A new look and feel for the customer workspace, from first sketch to final handoff.</p>
      </div>
      <div className="card-project-meta">
        <span className="card-status"><i /> In progress</span>
        <span className="card-team"><Users size={13} aria-hidden="true" /> 4 members</span>
      </div>
      <div className="card-project-footer">
        <div className="card-avatar-stack" aria-label="Project team: Jordan, Sam, Alex">
          <span>JL</span><span>SC</span><span>AK</span><i>+1</i>
        </div>
        <button className="card-open-button" type="button">Open project <ArrowUpRight size={13} aria-hidden="true" /></button>
      </div>
    </article>
  );
}

function ActionCard() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="mui-card action-card">
      <div className="card-author">
        <span className="card-author-avatar">AM</span>
        <span><strong>Alex Morgan</strong><small>Product design · 2 hours ago</small></span>
        <button className="card-more-button" type="button" aria-label="More post actions"><MoreHorizontal size={17} aria-hidden="true" /></button>
      </div>
      <div className="card-copy">
        <h3>Introducing the new workspace</h3>
        <p>We’ve brought projects, updates, and team conversations together in one calmer place. Here’s a first look at what’s new.</p>
      </div>
      <div className="card-inline-tags"><span>Product update</span><span>3 min read</span></div>
      <div className="card-action-row">
        <button className={cx('card-inline-action', liked && 'card-inline-action-active')} type="button" aria-pressed={liked} onClick={() => setLiked((value) => !value)}>
          <Heart size={14} fill={liked ? 'currentColor' : 'none'} aria-hidden="true" /> {liked ? 'Liked · 25' : 'Like · 24'}
        </button>
        <button className={cx('card-inline-action', saved && 'card-inline-action-active')} type="button" aria-pressed={saved} onClick={() => setSaved((value) => !value)}>
          {saved ? <Check size={14} aria-hidden="true" /> : <Bookmark size={14} aria-hidden="true" />} {saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </article>
  );
}

function MediaCard() {
  return (
    <article className="mui-card media-card">
      <div className="card-media-visual">
        <div className="card-media-orbit card-media-orbit-one" />
        <div className="card-media-orbit card-media-orbit-two" />
        <div className="card-media-art"><Image size={24} aria-hidden="true" /></div>
        <span className="card-media-label">FIELD NOTES · 04</span>
      </div>
      <div className="card-media-content">
        <div className="card-media-heading"><span>DESIGN SYSTEMS</span><span>8 min read</span></div>
        <h3>Building a more thoughtful interface</h3>
        <p>Small, consistent decisions help every screen feel like part of the same product.</p>
        <div className="card-media-footer">
          <span className="card-media-author"><span className="card-author-avatar">JL</span> Jordan Lee</span>
          <button className="card-inline-action" type="button" aria-label="Open article by Jordan Lee"><ArrowUpRight size={15} aria-hidden="true" /></button>
        </div>
      </div>
    </article>
  );
}

export default function CardDemo({ demoId }) {
  if (demoId === 'card-actions') return <ActionCard />;
  if (demoId === 'card-media') return <MediaCard />;
  return <ProjectCard />;
}
