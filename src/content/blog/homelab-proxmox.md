---
title: "Building a Homelab with Proxmox"
description: "A comprehensive guide to setting up a personal homelab using Proxmox, Docker, and Cloudflare for secure remote access."
pubDate: 2025-08-23
tags: ["homelab", "proxmox", "docker", "cloudflare", "self-hosting"]
isPinned: false
---

Setting up a homelab has been one of the most rewarding projects I've undertaken. It's given me hands-on experience with virtualization, networking, and self-hosting services that I use daily.

## Why Proxmox?

Proxmox Virtual Environment (VE) is an open-source server management platform that combines:

- **KVM virtualization** for full virtual machines
- **LXC containers** for lightweight Linux containers
- **Built-in backup and restore** functionality
- **Web-based management** interface
- **High availability** clustering support

## Hardware Setup

My homelab runs on:

- **HP EliteDesk 800 G5 Mini**
  - **CPU**: Intel i5-9500T @ 2.2GHz (6 cores, 6 threads)
  - **RAM**: 32GB DDR4-2400MHz
  - **Storage**: 256Gb NVMe SSD
- **HP EliteDesk 800 G4 SFF**
  - **CPU**: Intel i5-8600 @ 3.1GHz (6 cores, 6 threads)
  - **RAM**: 64GB DDR4-2133MHz
  - **Storage**:
    Utilizing a RAID-10 Setup
    - 2x 4TB HDD @ 7200RPM
    - 2x 4TB NVMe SSD
- **Network**: Gigabit Ethernet

## Key Services

I run several containerized services:

- **G5 node (HP EliteDesk 800 G5 Mini)**
  - 2x Minecraft servers (itzg/minecraft-server)
    - Ports: 25565 and 25566
    - Dedicated data volumes for each server

- **G4 node (HP EliteDesk 800 G4 SFF)**
  - FileBrowser (filebrowser/filebrowser) — web UI for file access (e.g., :8080)
  - nginx-proxy (nginxproxy/nginx-proxy) — automatic proxy for container-hosted sites (ports 80/443)
  - Tailscale VPN (tailscale/tailscale) — secure node-to-node connectivity (run in host network mode). Configured as a subnet router (advertising the LAN subnet) so I can SSH and connect to internal services from abroad via Tailscale; enable advertise-routes (or configure in the Tailscale admin console) and apply appropriate ACLs for remote access.

Deploy each stack on the node that runs the service (G5 for Minecraft servers; G4 for filebrowser, nginx-proxy, tailscale, portainer). Adjust volumes, environment variables, and resource limits as needed.

### Securing Access

For secure remote access, I use:

1. **Cloudflare Tunnel** for exposing services without port forwarding
2. **Zero Trust policies** for access control and security rules such as:
   - Blocking known botnet ips
   - Geo-blocking rules
   - Blocking CLI tools such as curl, wget
   - Blocking SQLi tools
   - Path protection rules
3. **Tailscale VPN**
   - Run in host mode as a subnet router; advertise routes, enforce ACLs to restrict SSH, and disable public SSH/port‑forwarding.
4. **Subnetting + VLANs**
   - The homelab is on a seperate VLAN to ensure exposure does not bleed over to the home network

## Lessons Learned

1. **Start small**: Begin with essential services and expand gradually
2. **Document everything**: Keep detailed notes of configurations
3. **Regular backups**: Automate backups to multiple locations
4. **Network security**: Use Subnetting and firewalls to isolate services
5. **Monitoring**: Set up alerting for critical services

## Future Plans

- Increase the storage of the Filebrowser/RAID setup
- Add GPU passthrough for AI/ML workloads
- Explore Kubernetes for container orchestration
- Try to get my hands on a Fortinet Router for a firewall
- Connect my spare raspberry Pi for a Pi-Hole

Building a homelab has accelerated my learning and given me practical experience that directly applies to professional environments. If you're considering starting your own homelab, I highly recommend it!

## Resources I Used

- [Proxmox Documentation](https://pve.proxmox.com/wiki/Main_Page)
- [Cloudflare Tunnel Guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
- [r/homelab](https://reddit.com/r/homelab) - Great community for inspiration and troubleshooting
